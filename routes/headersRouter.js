const router = require('express').Router()
const headersCtrl = require('../controllers/headersCtrl')

router.route('/')
    .post(headers.createHeaders)

router.route('/domainGetData')
    .get(headers.getHeaders)


module.exports = router