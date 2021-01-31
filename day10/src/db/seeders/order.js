"use strict";
const faker = require("faker");
faker.locale = "id_ID";

const order = [...Array(10)].map((order) => {
  return {
    user_id: faker.random.number({ min: 1, max: 10 }),
    driver_id: faker.random.number({ min: 1, max: 10 }),
    product_id: faker.random.number({ min: 1, max: 10 }),
    quantity: faker.random.number({ min: 1, max: 10 }),
    status: faker.random.arrayElement([
      "accepted",
      "sending",
      "done",
      "failure",
    ]),
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
    await queryInterface.bulkInsert("orders", order);
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
