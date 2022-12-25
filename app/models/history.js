"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
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
      this.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
      this.belongsTo(models.Flight, {
        foreignKey: {
          name: "flightId",
          allowNull: false,
        },
      });
      this.hasMany(models.Notification, {
        foreignKey: {
          name: "historyId",
          allowNull: false,
        },
      });
    } 
  }
  History.init(
    {
      bookingId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      flightId: DataTypes.INTEGER,
      historyDate: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
