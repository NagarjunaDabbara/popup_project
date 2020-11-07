const router = require('express').Router()
const recipientsCtrl = require('../controllers/recipientsCtrl')

router.route('/')
    .post(recipientsCtrl.createRecipients)
    .get(recipientsCtrl.getrecipients)


module.exports = router