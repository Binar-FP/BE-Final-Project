/* eslint-disable */
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
      TicketAirplane.hasMany(models.Booking, {
        foreignKey: {
          name: "ticketId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      TicketAirplane.belongsTo(models.Passenger, {
        foreignKey: {
          name: "passengerId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      TicketAirplane.belongsTo(models.Flight, {
        foreignKey: {
          name: "flightId",
          allowNull: false,
        },
      });
    }
  }
  TicketAirplane.init({
    passengerId: DataTypes.INTEGER,
    flightId: DataTypes.INTEGER,
    seatNumber: DataTypes.STRING,
    dateOfPurchase: DataTypes.DATEONLY,
    maxCabin: DataTypes.DOUBLE,
    typeOfClass: DataTypes.ENUM("Economy Class", "Business Class", "First Class"),
    typeOfTicket: DataTypes.ENUM("OneWay", "RoundTrip"),
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'TicketAirplane',
  });
  return TicketAirplane;
};