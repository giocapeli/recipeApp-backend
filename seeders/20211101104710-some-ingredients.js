"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ingredients",
      [
        {
          name: "Egg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apple",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sugar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vegetable Oil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cinnamon",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salt",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Flour",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vanilla Extract",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Baking Soda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Syrup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Butter",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pecan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vinegar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "lime juice",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ginger",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "garlic clove",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pinapple",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bell Pepper",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Onion",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Black Pepper",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mozzarella",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bread Crumbs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Broccoli",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Olive Oil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ground Beef",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cumin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tomato sauce",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tomato",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White Bread",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cheese",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jalapeno",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chickpea",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mayonnaise",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mushroom",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paprika",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Soy sauce",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Milk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kidney beans",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spinach",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Potato",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pork",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chicken tighs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // id 43
          name: "Dark Chocolate",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cocoa Powder",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Red Wine",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tagliatelle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //id 47
          name: "Carrot",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //id 48
          name: "Yeast",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //id 49
          name: "Raisins",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          //id 50
          name: "Coconut",
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
