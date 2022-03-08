const { DataTypes, Model } = require('sequelize');
const connection = require('../../database/connection');

class Patient extends Model { }

Pacientes.init({


    id: {

        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true

    },

    user_client_id: {

        type: DataTypes.BIGINT,
        allowNull: true

    },

    name: {

        type: DataTypes.STRING(150),
        allowNull: true

    },

    last_name: {

        type: DataTypes.STRING(150),
        allowNull: true


    },

    email: {

        type: DataTypes.STRING(250),
        allowNull: true

    },

    gender: {


        type: DataTypes.STRING(150),
        allowNull: true
    },

    app_installed: {


        type: DataTypes.BOOLEAN,
        allowNull: true

    },


    status: DataTypes.BOOLEAN,


}, {

    sequelize: connection,
    tableName: 'patient',


});



module.exports = Patient;



