const router = require('express').Router()
const templatesCtrl = require('../controllers/templatesCtrl')

router.route('/')
    .post(templatesCtrl.createTemplates)
    .get(templatesCtrl.getTemplates)
  
   


module.exports = router