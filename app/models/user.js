"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.History, {
        foreignKey: {
          name: "historyId",
          allowNull: false,
        },
        as: "history",
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      countryCode: DataTypes.INTEGER,
      username: DataTypes.STRING,
      NIK: DataTypes.BIGINT,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.INTEGER,
      imageUrl: DataTypes.TEXT,
      dateOfBirth: DataTypes.DATEONLY,
      gender: DataTypes.ENUM("male", "female"),
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
