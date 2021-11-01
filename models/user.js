"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.belongsToMany(models.recipe, {
        through: "recipe_user_ratings",
        foreignKey: "userId",
        as: "ratings",
      }),
        user.belongsToMany(models.recipe, {
          through: "recipe_user_favorites",
          foreignKey: "userId",
          as: "favorites",
        }),
        user.hasMany(models.recipe, { as: "owner" }); //just in the owner
      // define association here
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
