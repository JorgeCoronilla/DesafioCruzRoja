const { DataTypes} = require('sequelize');
const sequelize = require('../index');

const ChannelsModel = sequelize.define('channels', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fk_user_id_sender: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fk_user_id_recipient: {
        type: DataTypes.INTEGER,
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