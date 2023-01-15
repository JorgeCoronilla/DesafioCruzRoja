const router = require("express").Router();
const Logincontroller = require('../controllers/login.controllers')
const RegisterController = require('../controllers/register.controllers')
const UserController = require('../controllers/user.controllers')
const MessagesController = require('../controllers/messages.controllers')

const jwt = require("jsonwebtoken");

//login - signin - register - recover password
router.post("/recover-pass", Logincontroller.Login.recover)
router.post("/change-pass", Logincontroller.Login.change_pass)
router.post("/login", Logincontroller.Login.login)

router.post("/sign-in", RegisterController.Register.signin)
router.post("/check-email", RegisterController.Register.emailChecker)
router.post("/register", RegisterController.Register.register)

router.post("/registerProf", UserController.User.inRegUpdate2)


//User
router.post("/get_user", UserController.User.getUser)
router.post("/get_users", UserController.User.getUsers)
router.post("/get_current_user", UserController.User.getCurrentUser)

//Messages
router.post("/msg/create_channel", MessagesController.Message.createChannel)
router.post("/msg/check_channel", MessagesController.Message.checkChannel)
router.post("/msg/create_message", MessagesController.Message.createMessage)
router.post("/msg/read_messages", MessagesController.Message.readMessages)
router.post("/msg/read_channels", MessagesController.Message.readChannels)
router.post("/msg/read_inactive_channels", MessagesController.Message.readInActChannels)
router.post("/msg/check_banned",  MessagesController.Message.bannedUsers)
router.post("/msg/ban_user",  MessagesController.Message.banUser)

module.exports = router;