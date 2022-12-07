'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transDate: {
        type: Sequelize.DATEONLY
      },
      bookingId: {
        // autoIncrement: true,
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        references: {
          model: 'Bookings',
          key: 'id',
          as: 'bookingId'
        }
      },
      paymentId: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Payments',
          key: 'id',
          as: 'paymentId'
        }
      },
      userId: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId'
        }
      },
      adminId: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Admins',
          key: 'id',
          as: 'adminId'
        }
      },
      totalPrice: {
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
    await queryInterface.dropTable('Transactions');
  }
};