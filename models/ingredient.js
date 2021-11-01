"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ingredient.belongsToMany(models.recipe, {
        through: "recipe_ingredients",
        foreignKey: "ingredientId",
      });
      // define association here
    }
  }
  ingredient.init(
    {
      name: { type: DataTypes.STRING, unique: true, allowNull: false },
      unit: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "ingredient",
    }
  );
  return ingredient;
};
