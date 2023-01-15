const router = require("express").Router();
const Logincontroller = require('../controllers/login.controllers')
const RegisterController = require('../controllers/register.controllers')
const UserController = require('../controllers/user.controllers')
const jwt = require("jsonwebtoken");


router.post("/recover-pass", Logincontroller.Login.recover)
router.post("/change-pass", Logincontroller.Login.change_pass)
router.post("/login", Logincontroller.Login.login)

router.post("/sign-in", RegisterController.Register.signin)
router.post("/check-email", RegisterController.Register.emailChecker)
router.post("/register", RegisterController.Register.register)

router.post("/registerProf", UserController.User.inRegUpdate2)


module.exports = router;