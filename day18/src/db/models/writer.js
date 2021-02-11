"use strict";
const {
	Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class writer extends Model {
		/**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
		static associate(models) {
			// define association here
			writer.hasMany(models.book,{foreignKey:"writer_id"});
		}
	}
	writer.init({
		full_name: DataTypes.STRING,
		email: DataTypes.STRING,
		photo: DataTypes.STRING
	}, {
		sequelize,
		modelName: "writer",
		underscored: true,
	});
	return writer;
};