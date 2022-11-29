"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      airPortId: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'AirPorts',
          key: 'id',
          as: 'airPortId'
        }
      },
      destinationId: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'WhislistDestinations',
          key: 'id',
          as: 'destinationId'
        }
      },
      flightNumber: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      airLine: {
        type: Sequelize.STRING,
      },
      fromId: {
        type: Sequelize.CHAR,
      },
      toId: {
        type: Sequelize.CHAR,
      },
      depatureTime: {
        type: Sequelize.TIME,
      },
      arrivalTime: {
        type: Sequelize.DATE,
      },
      capasity: {
        type: Sequelize.INTEGER,
      },
      economyClassPrice: {
        type: Sequelize.DOUBLE,
      },
      businessClassPrice: {
        type: Sequelize.DOUBLE,
      },
      firstClassPrice: {
        type: Sequelize.DOUBLE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
