const { DataTypes, Model } = require('sequelize');
const connection = require('../../database/connection');

class Appointment extends Model{}
//name, date, start, end, place, patient_id, user_client_id, care_plan_id 
Appointment.init({

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

    start: {
      type: DataTypes.DATE,
      allowNull: true
    },

    end: {
      type: DataTypes.DATE,
      allowNull: true
    },

    place: {
      type: DataTypes.STRING(150),
      allowNull: true
    },

    patient_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },

    user_client_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },

    care_plan_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }

},{

    sequelize: connection,
    tableName: 'appointment',
});

module.exports = Appointment;
