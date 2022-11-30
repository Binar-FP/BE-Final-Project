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
      User.hasMany(models.Booking, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      User.hasMany(models.Transaction, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      User.hasMany(models.History, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      User.hasMany(models.WhislistDestination, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      NIK: DataTypes.BIGINT,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.CHAR(13),
      image: DataTypes.TEXT,
      dateOfBirth: DataTypes.DATEONLY,
      gender: DataTypes.ENUM("Male", "Female"),
      roleId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
