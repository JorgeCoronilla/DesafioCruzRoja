const router = require("express").Router();
const RegisterController = require('../controllers/register.controllers')
const jwt = require("jsonwebtoken");

/*Home*/
router.post("/sign-in", RegisterController.Register.signin)
router.post("/check-email", RegisterController.Register.emailChecker)
router.post("/register", RegisterController.Register.register)

module.exports = router;