"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class book extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
			book.belongsTo(models.writer,{foreignKey:"writer_id"});
		}
	}
	book.init({
		writer_id: DataTypes.INTEGER,
		category_id: DataTypes.INTEGER,
		title: DataTypes.STRING,
		description: DataTypes.STRING,
		photo: DataTypes.STRING
	}, {
		sequelize,
		modelName: "book",
		underscored: true,
	});
	return book;
};