const { DataTypes} = require('sequelize');
const sequelize = require('../index');

const AnswersModel = sequelize.define('answers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fk_user_id_user: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    fk_frequent_questions_id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },

    answer: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = AnswersModel