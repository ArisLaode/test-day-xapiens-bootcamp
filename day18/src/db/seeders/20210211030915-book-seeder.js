"use strict";
const faker = require("faker");
faker.locale = "id_ID";

const books = [...Array(10)].map((books, _index) => {
	return {
		writer_id: faker.random.number({ min: 1, max: 10 }),
		category_id: faker.random.number({ min: 1, max: 5 }),
		title: faker.random.words(4),
		description: faker.random.words(14),
		photo: faker.image.imageUrl(),
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
		await queryInterface.bulkInsert("books", books);
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
