'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WhislistDestination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WhislistDestination.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
    }

    static associate(models) {
      // define association here
      WhislistDestination.hasOne(models.Flight, {
        foreignKey: {
          name: "destinationId",
          allowNull: false,
        },
      });
    }
  }
  WhislistDestination.init({
    userId: DataTypes.INTEGER,
    nameDestination: DataTypes.STRING,
    imageDestination: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'WhislistDestination',
  });
  return WhislistDestination;
};