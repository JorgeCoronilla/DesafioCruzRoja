const { DataTypes} = require('sequelize');
const sequelize = require('../index');

const UserModel = sequelize.define('users', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_surname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    about_me: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    password_: {
        type: DataTypes.STRING,
        allowNull: false
    },

    year_birth: {
        type: DataTypes.INTEGER,
    },

    gender: {
        type: DataTypes.STRING,
        allowNull: true
    },

    country: {
        type: DataTypes.STRING,
        allowNull: true
    },

    mother_tongue: {
        type: DataTypes.STRING,
        allowNull: true
    },
    years_in: {
        type: DataTypes.STRING,
        allowNull: false
    },

    working: {
        type: DataTypes.STRING,
        allowNull: true
    },

    studies: {
        type: DataTypes.STRING,
        allowNull: true
    },

    support_type: {
        type: DataTypes.STRING,
        allowNull: true
    },

    expert: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    area: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pic: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
    },
}, {
    timestamps: true
});

module.exports = UserModel