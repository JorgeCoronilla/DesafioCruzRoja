const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const sendemail = require('../controllers/email.controller');


const User = {
    update: async (req, res) => {
       
        try {
             
            let newData = {
                name_: req.body.name_,
                country: req.body.country,
                email: req.body.email,
                type_education: req.body.type_education,
                institution: req.body.institution
            }
            let user = await UserModel.update( newData , { where: { email: req.body.email } })
            console.log(user)
            res.json({ mensaje: true })
           
        } catch (error) {
            res.json({mensaje: false})
            console.log(error)
        }
           

    }
}


module.exports = { User }