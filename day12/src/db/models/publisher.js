"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class publishers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      publishers.hasMany(models.book, {
        foreignKey: "publisher_id",
      });
      publishers.belongsToMany(models.author, {
        through: "book",
        foreignKey: { name: "publisher_id" },
      });
    }
  }
  publishers.init(
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
    }
  );
  return publishers;
};
