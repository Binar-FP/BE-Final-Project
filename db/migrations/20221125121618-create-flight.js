'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightId: {
        type: Sequelize.INTEGER
      },
      airLine: {
        type: Sequelize.STRING
      },
      fromId: {
        type: Sequelize.CHAR
      },
      toId: {
        type: Sequelize.CHAR
      },
      depatureTime: {
        type: Sequelize.TIME
      },
      arrivalTime: {
        type: Sequelize.DATE
      },
      capasity: {
        type: Sequelize.INTEGER
      },
      economyClassPrice: {
        type: Sequelize.DOUBLE
      },
<<<<<<< HEAD:migrations/20221125065750-create-ticket-airplane.js
      typeOfTicket: {
        type: Sequelize.ENUM("Economy Class", "Business Class", "First Class")
=======
      businessClassPrice: {
        type: Sequelize.DOUBLE
>>>>>>> d40ea0003805d5a35b944ae5d1118c8d452179a2:db/migrations/20221125121618-create-flight.js
      },
      firstClassPrice: {
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
<<<<<<< HEAD:migrations/20221125065750-create-ticket-airplane.js
  async down(queryInterface) {
    await queryInterface.dropTable('TicketAirplanes');
=======
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
>>>>>>> d40ea0003805d5a35b944ae5d1118c8d452179a2:db/migrations/20221125121618-create-flight.js
  }
};