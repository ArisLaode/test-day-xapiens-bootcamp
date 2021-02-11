"use strict";

const faker = require("faker");
faker.locale = "id_ID";

const writers = [...Array(10)].map((_writer, _index) => {
	return {
		full_name: faker.name.findName(),
		email : faker.internet.email(),
		photo : faker.image.people(),
		created_at: faker.date.recent(),
		updated_at: faker.date.recent(),
	};
});

module.exports = {
	up: async (queryInterface, _Sequelize) => {
		/**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
		await queryInterface.bulkInsert("writers", writers);
	},

	down: async (_queryInterface, _Sequelize) => {
		/**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	},
};
