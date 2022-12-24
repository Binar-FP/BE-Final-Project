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
    await queryInterface.bulkInsert("AirPorts", [
      {
        name: "Hang Nadim International Airport",
        code: "BTH",
        location: "Batam",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sultan Iskandar Muda International Airport",
        code: "BTJ",
        location: "Banda Aceh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
         {
        name: "Polonia International Airport",
        code: "MES",
        location: "Medan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
         {
        name: "Kuala Namu International Airport",
        code: "KMU",
        location: "Medan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
         {
        name: "Minangkabau  International Airport",
        code: "PDG",
        location: "Padang",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
         {
        name: "Sultan Thaha International Airport",
        code: "DJB",
        location: "Jambi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
         {
        name: "Sultan Syarif Kasim II International Airport",
        code: "PKU",
        location: "Pekanbaru",
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
