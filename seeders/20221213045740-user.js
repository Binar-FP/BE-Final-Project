'use strict';
const bcrypt = require("bcrypt");


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert("Users", [
      {
        "roleId": "buyer",
        "gender": "Male",
        "image": null,
        "NIK": "3328080203000011",
        "address": "tegal",
        "phoneNumber": "0853567889   ",
        "dateOfBirth": "2002-01-01",
        "lastName": "bagus",
        "firstName": "Zidan",
        "email": "nadir@gmail.com",
        "password": bcrypt.hashSync("12345678", 10),
        "googleId": null,
        "verified": true,
        "updatedAt": "2022-12-13T05:12:28.780Z",
        "createdAt": "2022-12-13T05:12:28.780Z",
      },
      {
        "roleId": "buyer",
        "gender": "Male",
        "image": null,
        "NIK": "3328080203000011",
        "address": "tegal",
        "phoneNumber": "0853567889   ",
        "dateOfBirth": "2002-01-01",
        "lastName": "bagus",
        "firstName": "Zidan",
        "email": "notverify1@gmail.com",
        "password": bcrypt.hashSync("12345678", 10),
        "googleId": null,
        "verified": false,
        "updatedAt": "2022-12-13T05:12:28.780Z",
        "createdAt": "2022-12-13T05:12:28.780Z",
      },
      {
        "roleId": "buyer",
        "gender": "Male",
        "image": null,
        "NIK": "3328080203000011",
        "address": "tegal",
        "phoneNumber": "0853567889   ",
        "dateOfBirth": "2002-01-01",
        "lastName": "bagus",
        "firstName": "Zidan",
        "email": "nadir2@gmail.com",
        "password": bcrypt.hashSync("12345678", 10),
        "googleId": null,
        "verified": true,
        "updatedAt": "2022-12-13T05:12:28.780Z",
        "createdAt": "2022-12-13T05:12:28.780Z",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
