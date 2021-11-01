"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipe_user_rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recipe_user_rating.init(
    {
      userId: DataTypes.INTEGER,
      recipeId: DataTypes.INTEGER,
      rating: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "recipe_user_rating",
    }
  );
  return recipe_user_rating;
};
