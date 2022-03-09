const { DataTypes, Model } = require('sequelize');
const connection = require('../../database/connection')



class User extends Model { }

User.init({

    id: {

        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true

    },

    name: {

        type: DataTypes.STRING(150),
        allowNull: false

    },

    last_name: {

        type: DataTypes.STRING(150),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
    },
    password: {

        type: DataTypes.STRING(250),
        allowNull: false

    },

    api_token: {

        type: DataTypes.STRING(250),
        allowNull: false

    },

    status: DataTypes.BOOLEAN(true),

}, {

    sequelize: connection,
    tableName: 'user'


});

module.exports = User;