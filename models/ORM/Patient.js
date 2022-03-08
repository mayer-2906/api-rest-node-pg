const { DataTypes, Model } = require('sequelize');
const connection = require('../../database/connection');

class Patient extends Model { }

Patient.init({


    id: {

        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true

    },

    user_client_id: {

        type: DataTypes.BIGINT,
        allowNull: false

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
        allowNull: false

    },

    gender: {


        type: DataTypes.STRING(150),
        allowNull: false
    },

    app_installed: {


        type: DataTypes.BOOLEAN,
        allowNull: false

    },


    status: DataTypes.BOOLEAN,


}, {

    sequelize: connection,
    tableName: 'patient',


});



module.exports = Patient;



