"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.TicketAirplane, {
        foreignKey: {
          name: "flightId",
          allowNull: false,
        },
      });
      this.belongsTo(models.WhislistDestination, {
        foreignKey: {
          name: "destinationId",
          allowNull: false,
        },
      });
      this.belongsTo(models.AirPort, {
        foreignKey: {
          name: "airPortId",
          allowNull: false,
        },
      });
    }
  }
  Flight.init(
    {
      airPortId: DataTypes.INTEGER,
      destinationId: DataTypes.INTEGER,
      flightNumber: DataTypes.CHAR(7),
      airLine: DataTypes.STRING,
      from: DataTypes.STRING,
      to: DataTypes.STRING,
      depatureDate: DataTypes.DATEONLY,
      depatureTime: DataTypes.TIME(6),
      arrivalDate: DataTypes.DATEONLY,
      arrivalTime: DataTypes.TIME(6),
      capasity: DataTypes.INTEGER,
      typeOfClass : DataTypes.ENUM("Economy Class", "Business Class", "First Class"),
      ClassPrice: DataTypes.DOUBLE,
      typeOfFlight: DataTypes.ENUM("One Way", "Round Way"),
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
