const router = require("express").Router();
const smtpCtrl = require("../controllers/smtpCtrl");

router.route("/").get(smtpCtrl.getSmtp);


module.exports = router;
