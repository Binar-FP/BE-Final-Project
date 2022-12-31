'use strict';

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
     await queryInterface.bulkInsert("Flights", [
      {
        "airPortId": 1,
        "destinationId": 1,
        "flightNumber": "JT 0534",
        "airLine": "Lion Air",
        "from": "Jakarta",
        "to": "Solo",
        "depatureDate": "2022-08-10",
        "depatureTime": "11:15",
        "arrivalDate": "2022-08-10",
        "arrivalTime": "12:15",
        "capasity": 250,
        "typeOfClass": "Business Class",
        "ClassPrice": 1000000,
        createdAt: new Date(),
        updatedAt: new Date(),
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
