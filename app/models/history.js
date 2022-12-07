"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      History.belongsTo(models.Transaction, {
        foreignKey: {
          name: "transId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      History.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
    }
  }
  History.init(
    {
      transId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      historyDate: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
