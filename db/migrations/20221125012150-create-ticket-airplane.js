"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("TicketAirplanes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      passengerId: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Passengers',
          key: 'id',
          as: 'passengerId'
        }
      },
      flightId: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Flights',
          key: 'id',
          as: 'flightId'
        }
      },
      seatNumber: {
        type: Sequelize.STRING,
      },
      dateOfPurchase: {
        type: Sequelize.DATEONLY,
      },
      maxCabin: {
        type: Sequelize.DOUBLE,
      },
      typeOfClass: {
        type: Sequelize.ENUM("Economy Class", "Business Class", "First Class"),
      },
      typeOfTicket: {
        type: Sequelize.ENUM("OneWay", "RoundTrip"),
      },
      price: {
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
    await queryInterface.dropTable("TicketAirplanes");
  },
};
