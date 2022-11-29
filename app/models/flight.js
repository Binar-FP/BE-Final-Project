'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flight.hasMany(models.TicketAirplane, {
        foreignKey: {
          name: "flightId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      Flight.belongsTo(models.WhislistDestination, {
        foreignKey: {
          name: "destinationId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      Flight.belongsTo(models.AirPort, {
        foreignKey: {
          name: "airPortId",
          allowNull: false,
        },
      });
    }
  }
  Flight.init({
    airPortId: DataTypes.INTEGER,
    destinationId: DataTypes.INTEGER,
    flightNumber: DataTypes.INTEGER,
    airLine: DataTypes.STRING,
    fromId: DataTypes.CHAR,
    toId: DataTypes.CHAR,
    depatureTime: DataTypes.TIME,
    arrivalTime: DataTypes.DATE,
    capasity: DataTypes.INTEGER,
    economyClassPrice: DataTypes.DOUBLE,
    businessClassPrice: DataTypes.DOUBLE,
    firstClassPrice: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};