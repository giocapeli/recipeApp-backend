"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipe_ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipe_ingredient.belongsTo(models.recipe);
      recipe_ingredient.belongsTo(models.ingredient);
      // define association here
    }
  }
  recipe_ingredient.init(
    {
      recipeId: DataTypes.INTEGER,
      ingredientId: DataTypes.INTEGER,
      quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      unitOfMeasure: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "recipe_ingredient",
    }
  );
  return recipe_ingredient;
};
