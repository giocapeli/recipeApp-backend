"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "recipes",
      [
        {
          title: "Taco Meat",
          userId: 2,
          description:
            "This recipe makes just the taco meat. You have to buy everything else, of course. Make a big batch and use for a multiple of different meals: add to bean burritos for a more hearty and tasty burrito, or add a can of beans (kidney, red, or pinto) and use for Frito® Pie, Navajo tacos, or taco salad.",
          content:
            "Heat a large skillet over medium-high heat. Cook and stir beef in the hot skillet until browned and crumbly, 5 to 7 minutes. Season beef with onion powder, garlic salt, celery salt, and cumin. Pour tomato sauce over the beef, stir to coat, and simmer until thickened, slightly, about 5 minutes.",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5281437.jpg&w=596&h=596&c=sc&poi=face&q=85",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Spicy Grilled Cheese Sandwich",
          userId: 2,
          description:
            "Grilled cheese with onions, tomatoes and jalapenos-- tastier than the original!",
          content:
            "Heat a large skillet over low heat. Spread butter or margarine onto one side of two slices of bread. Place both pieces buttered side down in the skillet. Lay a slice of cheese on each one, and top with slices of tomato, onion and jalapeno. Butter one side of the remaining slices of bread, and place on top buttered side up. When the bottom of the sandwiches are toasted, flip and fry until brown on the other side. ",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5081856.jpg&w=596&h=399&c=sc&poi=face&q=85",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Vegetarian Chickpea Sandwich Filling",
          userId: 2,
          description:
            "Serve this tasty sandwich spread on crusty whole grain rolls or pita bread, with lettuce and tomato. Other raw, chopped vegetables can be substituted for the celery. Your favorite salad dressing can be substituted for the mayo.",
          content:
            "Drain and rinse chickpeas. Pour chickpeas into a medium size mixing bowl and mash with a fork. Mix in celery, onion, mayonnaise (to taste), lemon juice, dill, salt and pepper to taste.",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3087235.jpg&w=596&h=596&c=sc&poi=face&q=85",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Geneva's Ultimate Hungarian Mushroom Soup",
          userId: 2,
          description:
            "A warm, filling soup that is a wonderful cool weather lunch or dinner and is especially great with a side of multi-grain bread! I load up on thickly cut mushrooms and use traditional Hungarian Sweet Paprika. Um! Definitely use the tomato and pepper. It gives it a totally different flavor. You may serve immediately or refrigerate and reheat. I find that the soup just as good if not better the next day. Use a ripe tomato. Also, if you can't find a Hungarian wax pepper, try another mild chile pepper and just use a smaller piece.",
          content:
            "Melt the butter in a large pot over medium heat. Cook and stir the onions in the butter until fragrant, about 5 minutes. Add the mushrooms and continue cooking until the mushrooms are tender, about 5 minutes more. Stir the dill, paprika, soy sauce, and chicken broth into the mushroom mixture; reduce heat to low, cover, and simmer 15 minutes. Whisk the milk and flour together in a small bowl. Stir the mixture into the soup. Add the tomato and Hungarian wax pepper. Return cover to the pot and simmer another 15 minutes, stirring occasionally. Season with salt and pepper. Mix the sour cream into the soup and continue cooking and stirring until the soup has thickened, 5 to 10 minutes more. Remove the Hungarian wax pepper and tomato and discard before serving the soup.",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4560116.jpg&w=596&h=399&c=sc&poi=face&q=85",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Creamy Italian White Bean Soup",
          userId: 3,
          description:
            "Hearty and healthy soup that is a favorite with friends and family. Sounds more difficult than it is. Try it! We're positive you'll be pleased. Serve with grated Parmesan cheese.",
          content:
            "In a large saucepan, heat oil. Cook onion and celery in oil for 5 to 8 minutes, or until tender. Add garlic, and cook for 30 seconds, continually stirring. Stir in beans, chicken broth, pepper, thyme and 2 cups water. Bring to a boil, reduce heat, and then simmer for 15 minutes. With slotted spoon, remove 2 cups of the bean and vegetable mixture from soup and set aside. In blender at low speed, blend remaining soup in small batches until smooth, (it helps to remove the center piece of the blender lid to allow steam to escape.) Once blended pour soup back into stock pot and stir in reserved beans. Bring to a boil, occasionally stirring. Stir in spinach and cook 1 minute or until spinach is wilted. Stir in lemon juice and remove from heat and serve with fresh grated Parmesan cheese on top.",
          imageUrl:
            "https://images-gmi-pmc.edge-generalmills.com/47317df9-6453-4d73-a907-088e8fd65ac1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "German Apple Cake",
          userId: 3,
          description:
            "This German Apple Cake is a moist dense cake that keeps well. It has been a family favorite for twenty years.",
          content:
            "Preheat oven to 350 degrees F (175 degrees C). Grease and flour one 9x13 inch cake pan. In a mixing bowl; beat oil and eggs with an electric mixer until creamy. Add the sugar and vanilla and beat well. Combine the flour salt, baking soda, and ground cinnamon together in a bowl. Slowly add this mixture to the egg mixture and mix until combined. The batter will be very thick. Fold in the apples by hand using a wooden spoon. Spread batter into the prepared pan. Bake at 350 degrees F (175 degrees C) for 45 minutes or until cake tests done. Let cake cool on a wire rack. Once cake is cool serve with a dusting of confectioners' sugar or with a Cream Cheese Frosting.",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5728410.jpg&w=596&h=596&c=sc&poi=face&q=85",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pecan Pie",
          userId: 3,
          description:
            "This is a wonderfully rich, Southern pie recipe that is the best I've tried!",
          content:
            "Preheat oven to 350 degrees F (175 degrees C). In a medium saucepan, combine the sugar, corn syrup, butter, water, and cornstarch. Bring to a full boil, and remove from heat. In a large bowl, beat eggs until frothy. Gradually beat in cooked syrup mixture. Stir in salt, vanilla, and pecans. Pour into pie shell. Bake in preheated oven for 45 to 50 minutes, or until filling is set.",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4586675.jpg&w=596&h=596&c=sc&poi=face&q=85",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Grilled Pork and Pineapple Kabobs",
          userId: 1,
          description:
            "Ditch the boring grilled chicken for a lean and juicy pork tenderloin with pineapple. Your kids will love the fun new way of eating dinner, and you will love the sweet and savory flavor combos this recipe offers.",
          content:
            "Combine pork, soy sauce, rice vinegar, brown sugar, sesame oil, lime juice, Sriracha, ginger, and garlic in a large resealable bag. Seal and shake up to combine well. Refrigerate for 1 hour, turning occasionally. While the pork is marinating, soak skewers in water for about 20 minutes prior to using them. That will help the skewers to not burn up when exposed to the flame. Preheat an outdoor grill or indoor grill pan to medium-high heat and lightly grease the grates with a small amount of vegetable oil. Thread the skewers with marinated pork, pineapple, and red pepper, alternating back and forth; discard the marinade. Cook skewers on the preheated grill until they obtain grill marks and the pork is no longer pink, about 2 minutes per side. Garnish with green onions and sesame seeds.",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9224134.jpg&q=85",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Chicken Fritters",
          userId: 1,
          description:
            "These chicken fritters are delicious on their own but outstanding with a chicken dipping sauce. Finger food at its best!",
          content:
            "Mix chicken, bread crumbs, onion, mozzarella cheese, egg, mayonnaise, salt, pepper, and garlic powder in a bowl until well combined. Shape mixture into 8 equal-sized patties. Heat oil in a large skillet. Fry patties until lightly browned, about 5 minutes. Flip and fry for an additional 3 to 5 minutes. Transfer fritters to a paper towel-lined plate.",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6334387.jpg&w=596&h=792&c=sc&poi=face&q=85",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Easy Roasted Broccoli",
          userId: 1,
          description:
            "Easy roasted broccoli. My favorite part is the roasted sliced stem pieces.",
          content:
            "Preheat oven to 400 degrees F (200 degrees C). Cut broccoli florets from the stalk. Peel the stalk and slice into 1/4-inch slices. Mix florets and stem pieces with olive oil in a bowl and transfer to a baking sheet; season with salt and pepper. Roast in the preheated oven until broccoli is tender and lightly browned, about 18 minutes.",
          imageUrl:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1765553.jpg&w=596&h=596&c=sc&poi=face&q=85",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("recipes", null, {});
  },
};
