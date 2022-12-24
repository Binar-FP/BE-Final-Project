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
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      NIK: {
        type: Sequelize.BIGINT,
      },
      address: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.CHAR(13),
      },
      image: {
        type: Sequelize.TEXT,
      },
      dateOfBirth: {
        type: Sequelize.DATEONLY,
      },
      gender: {
        type: Sequelize.ENUM("Male", "Female"),
      },
      googleId: {
        type: Sequelize.STRING,
      },
      roleId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      verified: {
        type: Sequelize.BOOLEAN,
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
  async down(queryInterface) {
    await queryInterface.dropTable("Users");
  },
};
