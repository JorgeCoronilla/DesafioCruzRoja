const { DataTypes} = require('sequelize');
const sequelize = require('../index');

const FQuestionsModel = sequelize.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    question: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    fk_user_id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = FQuestionsModel