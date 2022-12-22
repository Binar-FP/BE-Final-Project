'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Booking, {
        foreignKey: {
          name: "bookingId",
          allowNull: false,
        },
      });
      this.belongsTo(models.Flight, {
        foreignKey: {
          name: "flightId",
          allowNull: false,
        },
      });
    }
  }
  Seat.init({
    seatNumber: DataTypes.STRING,
    bookingId: DataTypes.INTEGER,
    flightId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};