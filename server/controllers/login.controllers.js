const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const UserModel = require('../ddbb/sql/models/User');
const sendemail = require('../controllers/email.controllers');

const Login = {
    login: async (req, res) => {
        const { email, pass } = req.body;
       
        try {
            console.log(email, pass)
            const user = await UserModel.findOne({ where: { email } })
       
            let compare = bcryptjs.compareSync(pass, user.password_);
            let userData = {
                id: user.id,
            }
            console.log(compare);
            console.log(user.user_id);

            if (compare) {
                const token = jwt.sign({
                    id: user.user_id,
                    user_name: user.user_name
                }, process.env.JWT_SECRET_KEY, { expiresIn: '4h' })
                res.json({ validation: true, token, user: userData })

            } else { res.json({ validation: false }) }

        } catch (error) {
            res.json({ validation: false})
        }
    },
    recover: async (req, res) => {
        const { email } = req.body
        try {
            const user = UserModel.findOne({ where: { email } })
            console.log("Entra " + user)
            if (user) {
                const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
                await sendemail.recover(token, req.body.email, user.user_name);
                res.json({ mensaje: `Email enviado a ${req.body.email}`, token });
                console.log(`Email enviado a ${req.body.email}`)
            }

        } catch (error) {
            res.json({mensaje: false})
            console.log(error)
        }
    },
    change_pass: async (req, res) => {
        const { password_, token } = req.body
        var passHash = await bcryptjs.hash(password_, 8);
        try {
            jwt.verify(token, process.env.JWT_SECRET_KEY, (error, authData) => {
                if (error) {
                    console.log(error)
                    res.json({ mensaje: false });
                } else {                 
                    UserModel.update({ password_: "EEEEE" }, { where: { email: authData.email } })
                    .then((data) => {
                        console.log(data)
                        res.json({ mensaje: true })
                    })
                    .catch(err => {
                        if (err) { res.send(err) }
                    })
    
                }
            })

        } catch (error) {
            res.json({mensaje: false})
            console.log(error)
        }
    }
}


module.exports = { Login }