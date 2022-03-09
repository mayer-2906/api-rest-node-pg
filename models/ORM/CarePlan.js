const { DataTypes, Model } = require('sequelize');
const connection = require('../../database/connection');

class CarePlan extends Model{}

CarePlan.init({

    id: {

        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true

    },

    name: {

        type: DataTypes.STRING(150),
        allowNull: true

    },

    date: {
      type: DataTypes.DATE,
      allowNull: true
    },

    status: {


        type: DataTypes.BOOLEAN,
        defaultValue: true

    },

},{

    sequelize: connection,
    tableName: 'care_plan',



});






module.exports = CarePlan;



