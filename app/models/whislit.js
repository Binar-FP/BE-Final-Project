'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class whislit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
      this.belongsTo(models.WhislistDestination, {
        foreignKey: {
          name: "destinationId",
          allowNull: false,
        },
      });
    }
  }
  whislit.init({
    userId: DataTypes.INTEGER,
    destinationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'whislit',
  });
  return whislit;
};