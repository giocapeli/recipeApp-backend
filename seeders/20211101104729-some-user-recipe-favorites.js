"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "recipe_user_favorites",
      [
        {
          userId: 1,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          recipeId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipe_user_favorites", null, {});
  },
};
