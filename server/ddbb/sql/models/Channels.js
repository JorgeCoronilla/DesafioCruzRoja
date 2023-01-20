const { DataTypes} = require('sequelize');
const sequelize = require('../index');

const ChannelsModel = sequelize.define('channels', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id_sender: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pic_sender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_name_sender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id_recipient: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pic_recipient: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_name_recipient: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_At: {
        field: 'createdat',
        type: DataTypes.DATE,
    },
    updated_At: {
        field: 'updatedat',
        type: DataTypes.DATE,
    },

}, {
    timestamps: true
});

module.exports = ChannelsModel



 
  

 
  