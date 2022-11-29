'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.hasOne(models.Booking, {
        foreignKey: {
          name: "schedId",
          allowNull: false,
        },
      });
    }
  }
  Schedule.init({
    dateFlight: DataTypes.DATEONLY,
    timeDepart: DataTypes.TIME,
    timeLand: DataTypes.TIME,
    currentPrice: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};