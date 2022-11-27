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
    }
  }
  Flight.init({
    flightId: DataTypes.INTEGER,
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