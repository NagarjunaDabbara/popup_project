const router = require('express').Router()
const campaignsCtrl = require('../controllers/campaignsCtrl')

router.route('/')
.post(campaignsCtrl.createCampaigns)
.get(campaignsCtrl.getCampaigns)


module.exports = router