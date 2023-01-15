const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const UserModel = require('../ddbb/sql/models/User');

const sendemail = require('../controllers/email.controller');

const User = {
    getUser: async (req, res) => {
        let token = req.body.token;
        let userName
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
            if (error) {
                console.log("Error del token")
                res.json({ validation: false })
            } else {
                userName = user.user_name
                console.log("Token correcto")
            }
        })
        if (userName) {
            try {
                const user = await UserModel.findOne({ where: { user_id: req.body.id } })
                console.log(user);
                res.json({
                    about_me: user.about_me,
                    area: user.area,
                    country: user.country,
                    expert: user.expert,
                    gender: user.gender,
                    mother_tongue: user.mother_tongue,
                    pic: user.pic,
                    studies: user.studies,
                    support_type: user.support_type,
                    user_id: user.user_id,
                    user_name: user.user_name,
                    user_surname: user.user_surname,
                    years_in: user.user_surname
                })
            } catch (error) {
                console.log(error)
                res.json({ mensaje: false })
            }

        }

    },

    getCurrentUser: async (req, res) => {
        let token = req.body.token;
        let userId
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
            if (error) {
                console.log("Error del token")
                res.json({ validation: false })
            } else {
                userId = user.id
                console.log("Token correcto")
            }
        })
        console.log(userId)
        if (userId) {
            try {
                const user = await UserModel.findOne({ where: { user_id: userId } })
                console.log(user);
                res.json({
                    about_me: user.about_me,
                    area: user.area,
                    country: user.country,
                    expert: user.expert,
                    gender: user.gender,
                    mother_tongue: user.mother_tongue,
                    pic: user.pic,
                    studies: user.studies,
                    support_type: user.support_type,
                    user_id: user.user_id,
                    user_name: user.user_name,
                    user_surname: user.user_surname,
                    years_in: user.user_surname
                })
            } catch (error) {
                console.log(error)
                res.json({ mensaje: false })
            }

        }

<<<<<<< HEAD
    },
    getUsers: async (req, res) => {
        let token = req.body.token;
        let userName
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
            if (error) {
                console.log("Error del token")
                res.json({ validation: false })
            } else {
                userName = user.user_name
                console.log("Token correcto")
            }
        })
        if (userName) {
            try {
                const users = await UserModel.findAll()
                console.log(users);
                let usersList = []
                users.map(user => {
                    usersList.push({
                        about_me: user.about_me,
                        area: user.area,
                        country: user.country,
                        expert: user.expert,
                        gender: user.gender,
                        mother_tongue: user.mother_tongue,
                        pic: user.pic,
                        studies: user.studies,
                        support_type: user.support_type,
                        user_id: user.user_id,
                        user_name: user.user_name,
                        user_surname: user.user_surname,
                        years_in: user.user_surname
                    })
                })
                res.json(usersList)
            } catch (error) {
                console.log(error)
                res.json({ mensaje: false })
            }

        }

    }
=======

    },
    inRegUpdate2: async (req, res) => {
        try {
            let userId =  req.body.id
            let newData = {
                year_birth: req.body.year_birth, 
                gender: req.body.gender, 
                mother_tongue: req.body.mother_tongue, 
                working: req.body.working, 
                years_in: req.body.year_in,
                area: req.body.area, 
            }
            let user = await UserModel.update( newData , { where: { user_id: userId } })
            res.json({ mensaje: true })
           
        } catch (error) {
            res.json({mensaje: false})
            console.log(error)
        }
>>>>>>> beccbf68ea9e26cf1d7b495fe0daaf87a0e5c069
}


module.exports = { User }