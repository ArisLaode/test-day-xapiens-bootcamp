"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      book.belongsTo(models.author);
      book.belongsTo(models.publisher);
    }
  }
  book.init(
    {
      author_id: DataTypes.INTEGER,
      publisher_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      price: DataTypes.STRING,
      year: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "book",
      underscored: true,
    }
  );
  return book;
};
