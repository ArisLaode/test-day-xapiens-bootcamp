"use strict";
const { Model } = require("sequelize");
const author = require("./author");
module.exports = (sequelize, DataTypes) => {
  class publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      publisher.hasMany(models.book, {
        foreignKey: {
          name: "publisher_id",
        },
        as: "books",
      });

      publisher.belongsToMany(models.author, {
        through: models.book,
        foreignKey: {
          name: "publisher_id",
        },
      });
    }
  }
  publisher.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      website: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "publisher",
      underscored: true,
    }
  );
  return publisher;
};
