const { DataTypes, Model } = require('sequelize');
const connection = require('../../database/connection');

class Client extends Model{}

Client.init({

    id: {

        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true

    },

    name: {

        type: DataTypes.STRING(150),
        allowNull: true

    },

    identification: {
      type: DataTypes.STRING(150),
      allowNull: true
    },

    city: {
      type: DataTypes.STRING(150),
      allowNull: true
    },

    country: {
      type: DataTypes.STRING(150),
      allowNull: true
    },

    address: {
      type: DataTypes.STRING(150),
      allowNull: true
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },

},{

    sequelize: connection,
    tableName: 'clients',
});

module.exports = Client;
