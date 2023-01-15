const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const UserModel = require('../ddbb/sql/models/User');
// const sendemail = require('../controllers/email.controller');


const User = {
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
           

    }
}


module.exports = { User }