const { DataTypes, Model } = require('sequelize');
const connection = require('../../database/connection')

class UserClient extends Model { }

UserClient.init({


    id: {

        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    user_id: {

        type: DataTypes.BIGINT,
        allowNull: false

    },

    client_id: {

        type: DataTypes.BIGINT,
        allowNull: false

    },

    status: DataTypes.BOOLEAN(true),


}, {

    sequelize: connection,
    tableName: 'user_client'


});


module.exports = UserClient;




