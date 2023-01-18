const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const sequelize = require('../ddbb/sql/index');
const UserModel = require('../ddbb/sql/models/User');
const sendemail = require('../controllers/email.controllers');


const Register = {
    register: async (req, res) => {
        try {
            
            var passHash = await bcryptjs.hash(req.body.password_, 8)
            let newUser = {
                user_name: req.body.user_name,
                email: req.body.email,
                password_: passHash,
                user_surname: req.body.user_surname, 
                about_me:`about_me`, 
                year_birth: 1979, 
                gender: `gender`, 
                country:`country`, 
                mother_tongue: `mother_tongue`, 
                years_in: `years_in`, 
                working: `working`, 
                studies: `studies`, 
                support_type: `support_type`,
                expert: false, 
                area: `area`, 
                pic: `avatar.jpg`
            }
            UserModel.create(newUser)
                .then((data) => { res.json({ mensaje: true }) })
                .catch(err => {
                    if (err) {
                        console.log(err)
                        res.json({ mensaje: false })
                    }
                })

        } catch (error) {
            res.json({mensaje: false})
            console.log(error)
        }
    },
    signin: async (req, res) => {

        try {
            const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
            await sendemail.emailToRegister(token, req.body.email);
            res.json({ mensaje: `Email enviado a ${req.body.email}` });

        } catch (error) {
            res.json({ mensaje: false })

        }
    },
    emailChecker: async (req, res) => {
        jwt.verify(req.body.token, process.env.JWT_SECRET_KEY, (error, email) => {
            if (error) { res.json({ mensaje: false }) } else {
                res.json({ mensaje: true, email: email.email })
            }
        });
    }


}


module.exports = { Register }