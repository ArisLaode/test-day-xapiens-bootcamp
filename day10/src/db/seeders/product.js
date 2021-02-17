"use strict";
const faker = require("faker");
faker.locale = "id_ID";

const product = [...Array(10)].map((product) => {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    created_at: faker.date.recent(),
    updated_at: faker.date.recent(),
  };
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("products", product);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
