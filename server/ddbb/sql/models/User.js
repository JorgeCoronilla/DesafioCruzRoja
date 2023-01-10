const { DataTypes} = require('sequelize');
const sequelize = require('../index');

<<<<<<< HEAD

=======
>>>>>>> 5105901bea5c73a9de28a4bd6f76c7d67dc70670
const UserModel = sequelize.define('users', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    about_me: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    langauges: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    phone: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    studies: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    country: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    age: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    emotional_support: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },

    legal_support: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },

    collab_individual: {
        type: DataTypes.BOOLEAN,
        unique: true,
        allowNull: false
    },

    collab_institution: {
        type: DataTypes.BOOLEAN,
        unique: true,
        allowNull: false
    },

    job: {
        type: DataTypes.BOOLEAN,
        unique: true,
        allowNull: false
    },

    password_: {
        type: DataTypes.STRING,
        allowNull: false
    },

    banned_users: {
        type: DataTypes.JSON,
        allowNull: true
    },
    favs: {
        type: DataTypes.JSON,
        allowNull: true
    }
}, {
    timestamps: false
});

module.exports = UserModel