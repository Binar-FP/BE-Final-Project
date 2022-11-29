/* eslint-disable */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Booking, {
        foreignKey: {
          name: "bookingId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Admin, {
        foreignKey: {
          name: "adminId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Payment, {
        foreignKey: {
          name: "paymentId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      Transaction.hasMany(models.History, {
        foreignKey: {
          name: "transId",
          allowNull: false,
        },
      });
    }
  }
  Transaction.init({
    transDate: DataTypes.DATEONLY,
    bookingId: DataTypes.ARRAY(DataTypes.INTEGER),
    paymentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    adminId: DataTypes.INTEGER,
    totalPrice: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};