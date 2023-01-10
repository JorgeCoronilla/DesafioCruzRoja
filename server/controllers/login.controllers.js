const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const sendemail = require('../controllers/email.controller');
const UserModel = require('../ddbb/sql/models/User')

const Login = {
    login: async (req, res) => {
        const { email, pass } = req.body
        try {
            let user = await UserModel.findOne({ where: { email } });
            let compare = bcryptjs.compareSync(pass, user.password_);
            let userData = {
                id: user.id,
            }
            console.log(compare);

            if (compare) {
                const token = jwt.sign({
                    id: user.id,
                    user_name: user.user_name,
                    email: user.email
                }, process.env.JWT_SECRET_KEY, { expiresIn: '4h' })
                res.json({ validation: true, token, user: userData })

            } else { res.json({ validation: false }) }

        } catch (error) {
            res.json({ validation: false})
        }
    }
}


module.exports = { Login }