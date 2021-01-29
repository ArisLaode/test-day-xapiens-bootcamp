"use strict";

const faker = require("faker");
faker.locale = "id_ID";

const publishers = [...Array(10)].map((publisher) => {
  return {
    name: faker.name.findName(),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    website: faker.internet.domainName(),
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
    await queryInterface.bulkInsert("publishers", publishers);
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
