const router = require("express").Router();
const Logincontroller = require('../controllers/login.controllers')


router.post("/recover-pass", Logincontroller.Login.recover)
router.post("/change-pass", Logincontroller.Login.change_pass)
router.post("/login", Logincontroller.Login.login)

module.exports = router;