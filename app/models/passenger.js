'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Passenger.hasOne(models.TicketAirplane, {
        foreignKey: {
          name: "passengerId",
          allowNull: false,
        },
      });
    }
  }
  Passenger.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    NIK: DataTypes.BIGINT,
    phoneNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Passenger',
  });
  return Passenger;
};