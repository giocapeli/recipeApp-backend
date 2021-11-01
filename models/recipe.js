"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recipe.belongsToMany(models.user, {
        through: "recipe_user_ratings",
        foreignKey: "recipeId",
        as: "ratings",
      }),
        recipe.belongsToMany(models.user, {
          through: "recipe_user_favorites",
          foreignKey: "recipeId",
          as: "favorites",
        }),
        recipe.belongsTo(models.user); //don't need the
      // define association here
    }
  }
  recipe.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "recipe",
    }
  );
  return recipe;
};
