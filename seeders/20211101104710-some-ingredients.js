"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ingredients",
      [
        {
          name: "Egg",
          unit: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple",
          unit: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sugar",
          unit: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vegetable Oil",
          unit: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cinnamon",
          unit: "teaspoon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salt",
          unit: "teaspoon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Flour",
          unit: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vanilla Extract",
          unit: "teaspoon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baking Soda",
          unit: "teaspoon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Syrup",
          unit: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Butter",
          unit: "tablespoon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pecan",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vinegar",
          unit: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "lime juice",
          unit: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ginger",
          unit: "tablespoon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "garlic clove",
          unit: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pinapple",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bell Pepper",
          unit: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Onion",
          unit: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Black Pepper",
          unit: "teaspoon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mozzarella",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bread Crumbs",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Broccoli",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Olive Oil",
          unit: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ground Beef",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cumin",
          unit: "teaspoon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tomato sauce",
          unit: "ml",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tomato",
          unit: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White Bread",
          unit: "slice",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cheese",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jalapeno",
          unit: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chickpea",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mayonnaise",
          unit: "tablespoon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mushroom",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paprika",
          unit: "tablespoon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Soy sauce",
          unit: "tablespoon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Milk",
          unit: "cup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kidney beans",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spinach",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Potato",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pork",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chicken tighs",
          unit: "grams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ingredients", null, {});
  },
};
