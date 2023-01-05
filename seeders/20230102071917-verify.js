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

    await queryInterface.bulkInsert("Verifies", [
      {
        "userId": 1,
        "tokenVerify": "9fd568f8-c2a4-4aa0-9517-33b0002a66731672637292634",
        expiredAt: "2000-01-03 12:28:12.638+07",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "userId": 5,
        "tokenVerify": "9fd568f8-c2a4-4aa0-9517-33b0002a66731672637292639",
        expiredAt: "2025-01-03 12:28:12.638+07",
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
