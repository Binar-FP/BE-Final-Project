'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TicketAirplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TicketAirplane.init({
    ticketId: DataTypes.INTEGER,
    flightNumber: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    seatNumber: DataTypes.STRING,
    dateOfPurchase: DataTypes.DATEONLY,
    maxCabin: DataTypes.DOUBLE,
    typeOfTicket: DataTypes.ENUM,
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'TicketAirplane',
  });
  return TicketAirplane;
};