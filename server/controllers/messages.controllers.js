const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const MessagesModel = require('../ddbb/sql/models/Messages')
const ChannelsModel = require('../ddbb/sql/models/Channels')

const Message = {
    createChannel: async (req, res) => {
        let token = req.body.token;
        let userID
        console.log('Llego')
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
            if (error) {
                console.log("Error del token")
                res.json({ validation: false })
            } else { 
                userID = user.id
                console.log(userID)
            }
        })
        let newChannel = {
            fk_user_id_sender: userID,
            fk_user_id_recipient: req.body.recipient,
        }
        if (userID) {
        try {
            ChannelsModel.create(newChannel)
                .then((data) => { res.json({ mensaje: true, channelID: data.id });
            console.log(data) })
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
    }
    },

    createMessage: async (req, res) => {
        let token = req.body.token;
        let userID
        console.log(req.body)
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
            if (error) {
                console.log("Error del token")
                res.json({ validation: false })
            } else { 
                userID = user.id }
        })
        let newMessage = {
            fk_user_id_sender: userID,
            fk_user_id_recipient: req.body.recipient,
            fk_channel_id: req.body.fk_channel_id,
            message: req.body.message,
        }
        if (userID) {
        try {
            MessagesModel.create(newMessage)
                .then((data) => { res.json({ mensaje: true });
            console.log(data) })
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
    }
    },

    readMessages: async (req, res) => {
        let token = req.body.token;
        let userID
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
            if (error) {
                console.log("Error del token")
                res.json({ validation: false })
            } else { 
                userID = user.id }
        })
        if (userID){
            try {
                const messages = await MessagesModel.findAll({ where: { fk_channel_id: req.body.channelId  } })
                console.log(messages)
                res.json(messages)
            } catch (error) {
                console.log(error)
                res.json({ mensaje: false })
            }
        }
       
    },

    readChannels: async (req, res) => {
        console.log(req.body.id)
        try {
            const user = await ChannelsModel.findOne({ where: { user_id: req.body.id } })
            console.log(user);
            res.json(user)

        } catch (error) {
            console.log(error)
            res.json({ mensaje: false })
        }
    },

    getChannel: async (req, res) => {
        console.log(req.body.id)
        try {
            const user = await ChannelsModel.findOne({ where: { user_id: req.body.id } })
            console.log(user);
            res.json(user)

        } catch (error) {
            console.log(error)
            res.json({ mensaje: false })
        }
    },

    banUser: async (req, res) => {
        console.log(req.body.id)
        try {
            const user = await ChannelsModel.findOne({ where: { user_id: req.body.id } })
            console.log(user);
            res.json(user)

        } catch (error) {
            console.log(error)
            res.json({ mensaje: false })
        }
    },

    bannedUsers: async (req, res) => {
        console.log(req.body.id)
        try {
            const user = await UserModel.findOne({ where: { user_id: req.body.id } })
            console.log(user);
            res.json(user)

        } catch (error) {
            console.log(error)
            res.json({ mensaje: false })
        }
    }
}


module.exports = { Message }