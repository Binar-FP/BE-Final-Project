"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.CHAR(8),
      },
      countryCode: {
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
      },
      NIK: {
        type: Sequelize.BIGINT,
      },
      address: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        type: Sequelize.TEXT,
      },
      dateOfBirth: {
        type: Sequelize.DATEONLY,
      },
      gender: {
        type: Sequelize.ENUM("male", "female"),
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
    await queryInterface.dropTable("Users");
  },
};
