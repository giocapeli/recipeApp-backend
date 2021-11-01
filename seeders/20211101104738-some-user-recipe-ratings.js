"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "recipe_user_ratings",
      [
        {
          userId: 1,
          recipeId: 1,
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          recipeId: 2,
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          recipeId: 5,
          rating: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          recipeId: 7,
          rating: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          rating: 5,
          recipeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          rating: 5,
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          rating: 1,
          recipeId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          rating: 5,
          recipeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          rating: 5,
          recipeId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          rating: 1,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          rating: 3,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          rating: 5,
          recipeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          rating: 1,
          recipeId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          rating: 4,
          recipeId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          rating: 1,
          recipeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          rating: 4,
          recipeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          rating: 5,
          recipeId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          rating: 3,
          recipeId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipe_user_ratings", null, {});
  },
};
