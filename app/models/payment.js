/* eslint-disable */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.hasMany(models.Transaction, {
        foreignKey: {
          name: "paymentId",
          allowNull: false,
        },
      });
    }
  }
  Payment.init({
    typeOfPayment: DataTypes.ENUM(
      "Transfer",
      "ATM",
      "Credit Card",
      "Internet Bangking"
    ),
    imageBrand: DataTypes.TEXT,
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};