const Campaings = require("../models/campaignsModel");

const campaignsCtrl = {
  getCampaigns: async (req, res) => {
    const keyword = req.query.keyword
      ?{
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const pageSize = Number(req.query.pageSize) || 10;
    let page = Number(req.query.page) || 1;
    const sort = req.query.sortField
      ? {
          [req.query.sortField]: req.query.sortDirection || 1,
        }
      : {};
    const count = await Campaings.countDocuments({ ...keyword });
    const totalPages = Math.ceil(count / pageSize);
    page = page > totalPages ? totalPages : page;

    const campaingsLists = await Campaings.find({ ...keyword }, null, {
      sort,
      limit: pageSize,
      skip: pageSize * (page - 1),
    }).lean();

    for (let i = 0; i < campaingsLists.length; i++) {
      campaingsLists[i].snum = i + pageSize * (page - 1) + 1;
    }
    pages = [];

    if (totalPages <= 9) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page >= totalPages - 3) {
        for (let i = 1; i <= 3; i++) {
          pages.push(i);
        }
        pages.push("prev3");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else if (page <= 4) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("next3");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = 1; i <= 3; i++) {
          pages.push(i);
        }
        pages.push("prev3");
        for (let i = page - 1; i <= page + 1; i++) {
          pages.push(i);
        }
        pages.push("next3");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
      }
    }
    return res.json({
    campaingsLists,
      page,
      totalPages,
      pages,
      totalEntries: count,
    });
  },
  createCampaigns: async (req, res) => {
    try {
      const {name,recipientGroups } = req.body;
      const campaings = new Campaings({
         name,
         recipientGroups
      });
      await campaings.save();
      res.json({ msg: "Created a Note" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

};
module.exports = campaignsCtrl;



