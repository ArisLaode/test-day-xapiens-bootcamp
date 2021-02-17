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
      author.hasMany(models.book, {
        foreignKey: {
          name: "author_id",
        },
        as: "author",
      });

      author.belongsToMany(models.publisher, {
        through: models.book,
        foreignKey: {
          name: "author_id",
        },
      });
    }
  }
  author.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "author",
      underscored: true,
    }
  );
  return author;
};
