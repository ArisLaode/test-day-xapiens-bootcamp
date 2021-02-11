"use strict";
const faker = require("faker");
faker.locale = "id_ID";

const categories = [...Array(5)].map((categorie, _index) => {
	return {
		category: faker.random.arrayElement(["novel", "religi", "psycolog", "math","sains"]),
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
		await queryInterface.bulkInsert("categories", categories);
	},

	down: async (queryInterface, Sequelize) => {
		/**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	}
};
