const { DataTypes, Model } = require('sequelize');
const connection = require('../../database/connection');


class Role extends Model { }

Role.init({

    id: {

        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true

    },

    type: {

        type: DataTypes.STRING(150),
        allowNull: false

    },

    status: DataTypes.BOOLEAN(true),

}, {


    sequelize: connection,
    tableName: 'role',



});

module.exports = Role;