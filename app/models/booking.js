/* eslint-disable */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    bookingId: DataTypes.INTEGER,
    dateBooking: DataTypes.DATEONLY,
    specialAccommodation: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};