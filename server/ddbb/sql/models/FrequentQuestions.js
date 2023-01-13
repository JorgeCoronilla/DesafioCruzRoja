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
        allowNull: false
    },
    fk_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = FQuestionsModel