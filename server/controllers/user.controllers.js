const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");

const UserModel = require('../ddbb/sql/models/User');
const FavsModel = require('../ddbb/sql/models/Favs')

// const sendemail = require('../controllers/email.controller');

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
                    pic: `http://localhost:3001/pics/${user.pic}`,
                    studies: user.studies,
                    support_type: user.support_type,
                    user_id: user.user_id,
                    user_name: user.user_name,
                    user_surname: user.user_surname,
                    years_in: user.user_surname,
                    email: user.email
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
                res.json({ mensaje: "token error" })
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
                    pic: `http://localhost:3001/pics/${user.pic}`,
                    studies: user.studies,
                    support_type: user.support_type,
                    user_id: user.user_id,
                    user_name: user.user_name,
                    user_surname: user.user_surname,
                    years_in: user.user_surname,
                    email: user.email
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
                const users = await UserModel.findAll( {where: { country: 'Romania' } })
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
                        pic: `http://localhost:3001/pics/${user.pic}`,
                        studies: user.studies,
                        support_type: user.support_type,
                        user_id: user.user_id,
                        user_name: user.user_name,
                        user_surname: user.user_surname,
                        years_in: user.user_surname,
                        email: user.email
                    })
                })
                res.json(usersList)
            } catch (error) {
                console.log(error)
                res.json({ mensaje: false })
            }
        }
    },
    inRegUpdate2: async (req, res) => {
        try {
            let email =  req.body.email
            let newData = {
                year_birth: req.body.year_birth, 
                gender: req.body.gender, 
                mother_tongue: req.body.mother_tongue, 
                working: req.body.working, 
                years_in: req.body.years_in,
                area: req.body.area, 
            }
            let user = await UserModel.update( newData , { where: { email: email } })
            res.json({ mensaje: true })
           
        } catch (error) {
            res.json({mensaje: false})
            console.log(error)
        }
    },
    inRegUpdate3: async (req, res) => {
        try {
            let email =  req.body.email
            let newData = {
                support_type: req.body.support_type
            }
            let user = await UserModel.update( newData , { where: { email: email } })
            res.json({ mensaje: true })
           
        } catch (error) {
            res.json({mensaje: false})
            console.log(error)
        }
    },
    makeFav : async(req,res )=> {
        try {
            
            let newFav = {
                fk_user_id_sender: req.body.sender,
                fk_user_id_recipient: req.body.recipient,
            }
            await FavsModel.create(newFav)
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
    takeFav : async(req,res )=> {
        try {
            let sender = req.body.sender
            let recipient = req.body.recipient
            await FavsModel.destroy({
                where: ({ fk_user_id_sender: sender },{ fk_user_id_recipient: recipient })})
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
    getFavs : async(req,res )=> {
        try {
            console.log(req.params.profileId)
            let sender = req.params.profileId;
            const users = await FavsModel.findAll({ where: { fk_user_id_sender: sender } })
            let userFavs = []
            users.map(user => {
                userFavs.push(
                    user.fk_user_id_recipient
                )
            })
            res.json(userFavs)
        } catch (error) {
            console.log(error)
            res.json({ mensaje: false })
        }
    }
}


module.exports = { User }