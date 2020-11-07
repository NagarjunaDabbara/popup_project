const mongoose = require("mongoose");

const campaignsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  recipientGroups: {
    type: Boolean,
    default: false,
  }
});
module.exports = mongoose.model("Campaigns", campaignsSchema);
