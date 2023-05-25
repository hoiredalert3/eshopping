"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let brandData = [
      {
        name: "Quintiles",
        imagePath: "/img/brand-1.png",
      },
      {
        name: "IndiaCapital",
        imagePath: "/img/brand-2.png",
      },
      {
        name: "PaperlinX",
        imagePath: "/img/brand-3.png",
      },
      {
        name: "InfraRed",
        imagePath: "/img/brand-4.png",
      },
      {
        name: "Erlang",
        imagePath: "/img/brand-5.png",
      },
      {
        name: "Sport England",
        imagePath: "/img/brand-6.png",
      },
    ];
    brandData.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("Brands", brandData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Brands", null, {});
  },
};
