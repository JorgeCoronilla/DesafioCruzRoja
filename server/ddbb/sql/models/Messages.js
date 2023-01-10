const { DataTypes} = require('sequelize');
const sequelize = require('../index');

const MessagesModel = sequelize.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fk_user_id_sender: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    fk_user_id_recipient: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },

    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = MessagesModel