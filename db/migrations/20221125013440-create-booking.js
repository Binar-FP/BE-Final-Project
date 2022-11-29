'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      dateBooking: {
        type: Sequelize.DATEONLY
      },
      specialAccommodation: {
        type: Sequelize.BOOLEAN
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
      ticketId: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'TicketAirplanes',
          key: 'id',
          as: 'ticketId'
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
      schedId: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Schedules',
          key: 'id',
          as: 'schedId'
        }
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
    await queryInterface.dropTable('Bookings');
  }
};