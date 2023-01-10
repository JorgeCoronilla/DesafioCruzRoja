const router = require("express").Router();
<<<<<<< HEAD
const Logincontroller = require('../controllers/login.controllers')


router.post("/recover-pass", Logincontroller.Login.recover)
router.post("/change-pass", Logincontroller.Login.change_pass)
router.post("/login", Logincontroller.Login.login)
=======
const RegisterController = require('../controllers/register.controllers')
const jwt = require("jsonwebtoken");

/*Home*/
router.post("/sign-in", RegisterController.Register.signin)
router.post("/check-email", RegisterController.Register.emailChecker)
router.post("/register", RegisterController.Register.register)
>>>>>>> 5105901bea5c73a9de28a4bd6f76c7d67dc70670

module.exports = router;