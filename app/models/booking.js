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
      Booking.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      Booking.hasMany(models.Transaction, {
        foreignKey: {
          name: "bookingId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      Booking.belongsTo(models.Admin, {
        foreignKey: {
          name: "adminId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      Booking.belongsTo(models.Schedule, {
        foreignKey: {
          name: "schedId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      Booking.hasOne(models.TicketAirplane, {
        foreignKey: {
          name: "ticketId",
          allowNull: false,
        },
      });
    }
  }
  Booking.init({
    dateBooking: DataTypes.DATEONLY,
    specialAccommodation: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    ticketId: DataTypes.INTEGER,
    adminId: DataTypes.INTEGER,
    schedId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};