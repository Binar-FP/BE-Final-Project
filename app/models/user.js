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
      // this.hasMany(models.Booking, {
      //   foreignKey: {
      //     name: "userId",
      //     allowNull: false,
      //   },
      // });
      this.hasMany(models.Transaction, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
      this.hasMany(models.Booking, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
      this.hasMany(models.History, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
      this.hasMany(models.Notification, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
      this.hasMany(models.whislist, {
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
      image: {
        type: DataTypes.TEXT,
        defaultValue: "https://ik.imagekit.io/falonez/profile_3SZiN9bpA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672110448635",
      },
      dateOfBirth: DataTypes.DATEONLY,
      gender: DataTypes.ENUM("Male", "Female"),
      googleId: DataTypes.STRING,
      roleId: DataTypes.STRING,
      verified: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
