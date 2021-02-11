const {writer, book, categorie} = require("../db/models");

const resolvers = {
	Query: {
		hello: () => "halo",
		users: () => ({
			name: "aris",
			addr: "sulawesi",
		}),

		writers: () => writer.findAll(),
		books: () => book.findAll(),
		categories: () => categorie.findAll(),

		writerById: async (root, {id}) => {
			let res = await writer.findByPk(id, {
				include: book,
			});
			return res;
		},
	},
	Mutation: {
		createCategory: async (root, {category}) => {
			let result = await categorie.create({category});
			return result;
		},
		updateCategory: async (root, {id, category}) => {
			let result = await categorie.update(
				{category},
				{
					where: {
						id: id,
					},
				}
			);
			let resultUpdate = await categorie.findByPk(id);
			return resultUpdate;
		},
		deleteCategory: async (root, {id}) => {
			let resultDelete = await categorie.findByPk(id);
			let result = await categorie.destroy({
				where: {
					id: id,
				},
			});
			return resultDelete;
		},
		createWriter: async (root, {full_name, email, photo}) => {
			let result = await writer.create({full_name, email, photo});
			return result;
		},
		updateWriter: async (root, {id, full_name, email, photo}) => {
			let result = await writer.update(
				{full_name, email, photo},
				{
					where: {
						id: id,
					},
				}
			);
			let resultUpdate = await writer.findByPk(id);
			return resultUpdate;
		},
		deleteWriter: async (root, {id}) => {
			let resultDelete = await writer.findByPk(id);
			let result = await writer.destroy({
				where: {
					id: id,
				},
			});
			return resultDelete;
		},
		createBook: async (root, {writer_id, category_id, title, description, photo}) => {
			let result = await book.create({writer_id, category_id, title, description, photo});
			return result;
		},
		updateBook: async (root, {id, writer_id, category_id, title, description, photo}) => {
			let result = await book.update(
				{writer_id, category_id, title, description, photo},
				{
					where: {
						id: id,
					},
				}
			);
			let resultUpdate = await book.findByPk(id);
			return resultUpdate;
		},
		deleteBook: async (root, {id}) => {
			let resultDelete = await book.findByPk(id);
			let result = await book.destroy({
				where: {
					id: id,
				},
			});
			return resultDelete;
		},
	},
};

module.exports = resolvers;
