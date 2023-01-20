const { DataTypes} = require('sequelize');
const sequelize = require('../index');

const ReviewsModel = sequelize.define('messages', {
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
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    review: {
        type: DataTypes.STRING,
        allowNull: false
    },

    stars: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    timestamps: false
});

module.exports = ReviewsModel