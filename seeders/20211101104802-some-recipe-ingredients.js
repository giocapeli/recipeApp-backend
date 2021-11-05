"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "recipe_ingredients",
      [
        {
          recipeId: 1,
          ingredientId: 25,
          quantity: 300,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          ingredientId: 19,
          quantity: 1,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          ingredientId: 6,
          quantity: 1,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          ingredientId: 16,
          quantity: 2,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 1,
          ingredientId: 27,
          quantity: 100,
          unitOfMeasure: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          ingredientId: 11,
          quantity: 2,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          ingredientId: 29,
          quantity: 4,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          ingredientId: 30,
          quantity: 100,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          ingredientId: 28,
          unitOfMeasure: "ml",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          ingredientId: 19,
          quantity: 1,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 2,
          ingredientId: 31,
          unitOfMeasure: "ml",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          ingredientId: 32,
          quantity: 150,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          ingredientId: 19,
          quantity: 1,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          ingredientId: 33,
          unitOfMeasure: "ml",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          ingredientId: 14,
          unitOfMeasure: "ml",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          ingredientId: 20,
          quantity: 1,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 3,
          ingredientId: 6,
          unitOfMeasure: "ml",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          ingredientId: 11,
          quantity: 2,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          ingredientId: 19,
          unitOfMeasure: "ml",
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          ingredientId: 34,
          quantity: 200,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          ingredientId: 35,
          quantity: 1,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          ingredientId: 36,
          unitOfMeasure: "ml",
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          ingredientId: 37,
          unitOfMeasure: "ml",
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          ingredientId: 28,
          quantity: 1,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 4,
          ingredientId: 20,
          unitOfMeasure: "cup",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          ingredientId: 4,
          unitOfMeasure: "ml",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          ingredientId: 19,
          quantity: 1,
          unitOfMeasure: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          ingredientId: 16,
          quantity: 2,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          ingredientId: 38,
          unitOfMeasure: "cup",
          quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          ingredientId: 39,
          quantity: 50,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          ingredientId: 14,
          unitOfMeasure: "cup",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 5,
          ingredientId: 20,
          quantity: 1,
          unitOfMeasure: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          ingredientId: 1,
          unitOfMeasure: "ml",
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          ingredientId: 4,
          quantity: 1,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          ingredientId: 5,
          unitOfMeasure: "ml",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          ingredientId: 8,
          unitOfMeasure: "ml",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          ingredientId: 6,
          unitOfMeasure: "cup",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          ingredientId: 7,
          unitOfMeasure: "ml",
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          ingredientId: 9,
          quantity: 1,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 6,
          ingredientId: 2,
          quantity: 4,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          ingredientId: 3,
          unitOfMeasure: "ml",
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          ingredientId: 10,
          unitOfMeasure: "ml",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          ingredientId: 11,
          quantity: 2,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          ingredientId: 1,
          quantity: 3,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          ingredientId: 8,
          unitOfMeasure: "ml",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 7,
          ingredientId: 12,
          quantity: 100,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          ingredientId: 41,
          quantity: 200,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          ingredientId: 36,
          quantity: 4,
          unitOfMeasure: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          ingredientId: 3,
          quantity: 1,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          ingredientId: 13,
          quantity: 2,
          unitOfMeasure: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          ingredientId: 14,
          quantity: 1,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          ingredientId: 15,
          quantity: 1,
          unitOfMeasure: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          ingredientId: 16,
          quantity: 1,
          unitOfMeasure: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          ingredientId: 4,
          unitOfMeasure: "cup",
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          ingredientId: 17,
          quantity: 200,
          unitOfMeasure: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          ingredientId: 18,
          quantity: 1,
          unitOfMeasure: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 8,
          ingredientId: 19,
          quantity: 2,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 9,
          ingredientId: 42,
          quantity: 300,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 9,
          ingredientId: 22,
          quantity: 50,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 9,
          ingredientId: 19,
          quantity: 1,
          unitOfMeasure: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 9,
          ingredientId: 21,
          quantity: 100,
          unitOfMeasure: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 9,
          ingredientId: 1,
          quantity: 1,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 9,
          ingredientId: 33,
          quantity: 4,
          unitOfMeasure: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 9,
          ingredientId: 16,
          quantity: 1,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 9,
          ingredientId: 4,
          quantity: 1,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 10,
          ingredientId: 23,
          quantity: 150,
          unitOfMeasure: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 10,
          ingredientId: 24,
          quantity: 1,
          unitOfMeasure: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          recipeId: 10,
          ingredientId: 20,
          quantity: 1,
          unitOfMeasure: "g",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipe_ingredients", null, {});
  },
};
