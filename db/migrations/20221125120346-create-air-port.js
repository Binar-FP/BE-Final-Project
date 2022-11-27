'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AirPorts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airPortId: {
        type: Sequelize.INTEGER
      },
<<<<<<< HEAD:migrations/20221125070142-create-payment.js
      typeOfPayment: {
        type: Sequelize.ENUM(
          "Transfer",
          "ATM",
          "Credit Card",
          "Internet Bangking"
        )
=======
      name: {
        type: Sequelize.STRING
>>>>>>> d40ea0003805d5a35b944ae5d1118c8d452179a2:db/migrations/20221125120346-create-air-port.js
      },
      code: {
        type: Sequelize.CHAR
      },
      location: {
        type: Sequelize.STRING
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
<<<<<<< HEAD:migrations/20221125070142-create-payment.js
  async down(queryInterface) {
    await queryInterface.dropTable('Payments');
=======
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AirPorts');
>>>>>>> d40ea0003805d5a35b944ae5d1118c8d452179a2:db/migrations/20221125120346-create-air-port.js
  }
};