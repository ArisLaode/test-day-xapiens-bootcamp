"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // publisher.belongsTo(models.book);
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
