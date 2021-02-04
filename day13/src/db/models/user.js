"use strict";
const bcrypt = require("bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      first_name: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 30],
        },
      },
      last_name: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 30],
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "Incorrect email format",
          },
          async isExist(value) {
            const result = await user.findOne({
              where: {
                email: value,
              },
            });
            if (result != null && result.email == value)
              throw new Error("Email already exist. Use another one or login!");
          },
        },
        allowNull: {
          args: false,
          msg: "Email must be filled",
        },
      },
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeValidate: (instance) => {
          instance.email = instance.email.toLowerCase();
        },
        beforeCreate: (instance) => {
          instance.password = bcrypt.hashSync(instance.password, 10);
        },
      },
      sequelize,
      modelName: "user",
      underscored: true,
    }
  );
  return user;
};
