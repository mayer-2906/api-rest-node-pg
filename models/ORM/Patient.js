const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../database/db');



class Pacientes extends Model { }
Pacientes.init({

    id: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,

}, {

    user_client_id: DataTypes.BIGINT,
    allowNull: true

}, {

    name: DataTypes.STRING(150),
    allowNull: true

}, {

    last_name: DataTypes.STRING(150),
    allowNull: true

}, {

    email: DataTypes.STRING(250),
    allowNull: true

}, {

    gender: DataTypes.STRING(150),
    allowNull: true

}, {

    app_installed: DataTypes.BOOLEAN,
    allowNull: true
}, {

    status: DataTypes.BOOLEAN(true),


},{

    sequelize: sequelize,
    modelName: "pacientes"


});

module.exports = Pacientes;



