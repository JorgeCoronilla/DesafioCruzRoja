const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const UserModel = require('../ddbb/sql/models/User');


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
}


module.exports = { User }