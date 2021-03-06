"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      author.hasMany(models.book, {
        foreignKey: "author_id",
      }),
        author.belongsToMany(models.publisher, {
          through: "book",
          foreignKey: { name: "author_id" },
        });
    }
  }
  author.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      photo: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "author",
    }
  );
  return author;
};
