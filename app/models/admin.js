/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admin.hasMany(models.Booking, {
        foreignKey: {
          name: "adminId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      Admin.hasMany(models.Transaction, {
        foreignKey: {
          name: "adminId",
          allowNull: false,
        },
      });
    }
  }
  Admin.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      roleId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Admin",
    }
  );
  return Admin;
};
