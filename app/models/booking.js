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
    // static associate(models) {
    //   // define association here
    //   Booking.belongsTo(models.User, {
    //     foreignKey: {
    //       name: "userId",
    //       allowNull: false,
    //     },
    //   });
    // }

    // static associate(models) {
    //   // define association here
    //   Booking.hasMany(models.Transaction, {
    //     foreignKey: {
    //       name: "bookingId",
    //       allowNull: false,
    //     },
    //   });
    // }

    // static associate(models) {
    //   // define association here
    //   Booking.belongsTo(models.Admin, {
    //     foreignKey: {
    //       name: "adminId",
    //       allowNull: false,
    //     },
    //   });
    // }


    static associate(models) {
      // define association here
      this.hasMany(models.Passenger, {
        foreignKey: {
          name: "bookingId",
          allowNull: false,
        },
      });
      this.hasMany(models.Seat, {
        foreignKey: {
          name: "bookingId",
          allowNull: false,
        },
      });
      this.hasOne(models.History, {
        foreignKey: {
          name: "bookingId",
          allowNull: false,
        },
      });
      this.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
    }
  }
  Booking.init({
  price: DataTypes.DOUBLE,
  status: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};