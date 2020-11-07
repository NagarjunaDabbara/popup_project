const router = require('express').Router()
const logsCtrl = require('../controllers/logsCtrl')

router.route('/')
.post(logsCtrl.createLogs)
.get(logsCtrl.getLogs)


module.exports = router