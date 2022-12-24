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
          model: "AirPorts",
          key: "id",
          as: "airPortId",
        },
      },
      destinationId: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: "WhislistDestinations",
          key: "id",
          as: "destinationId",
        },
      },
      flightNumber: {
        type: Sequelize.CHAR(7),
      },
      airLine: {
        type: Sequelize.STRING,
      },
      from: {
        type: Sequelize.STRING,
      },
      to: {
        type: Sequelize.STRING,
      },
      depatureDate: {
        type: Sequelize.DATEONLY,
      },
      depatureTime: {
        type: Sequelize.TIME(6),
      },
      arrivalDate: {
        type: Sequelize.DATEONLY,
      },
      arrivalTime: {
        type: Sequelize.TIME(6),
      },
      capasity: {
        type: Sequelize.INTEGER,
      },
      typeOfClass: {
        type: Sequelize.ENUM("Economy Class", "Business Class", "First Class"),
      },
      ClassPrice: {
        type: Sequelize.DOUBLE,
      },
      typeOfFlight: {
        type: Sequelize.ENUM("One Way", "Round Way"),
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
