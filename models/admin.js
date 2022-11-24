'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    email: DataTypes.STRING,
    password: DataTypes.CHAR,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    NIK: DataTypes.BIGINT,
    phoneNumber: DataTypes.INTEGER,
    imageUrl: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};