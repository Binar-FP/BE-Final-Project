'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TicketAirplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticketId: {
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      seatNumber: {
        type: Sequelize.STRING
      },
      dateOfPurchase: {
        type: Sequelize.DATEONLY
      },
      maxCabin: {
        type: Sequelize.DOUBLE
      },
      typeOfTicket: {
        type: Sequelize.ENUM("Economy Class", "Business Class", "First Class")
      },
      price: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('TicketAirplanes');
  }
};