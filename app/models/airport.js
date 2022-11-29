'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AirPort extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AirPort.hasMany(models.Flight, {
        foreignKey: {
          name: "airPortId",
          allowNull: false,
        },
      });
    }
  }
  AirPort.init({
    name: DataTypes.STRING,
    code: DataTypes.CHAR,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AirPort',
  });
  return AirPort;
};