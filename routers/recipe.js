const { Router } = require("express");
const Recipe = require("../models/").recipe;
const User = require("../models/").user;
const Rating = require("../models/").recipe_user_rating;
const Ingredient = require("../models/").ingredient;
const { Op } = require("sequelize");
const router = new Router();

//Filtering functions:
function checkPlural(word) {
  const finalEs = ["s", "h", "x", "z"];
  if (word[word.length - 1] === "s") {
    if (word[word.length - 2] === "e") {
      if (word[word.length - 3] === "i") {
        return word.substring(0, word.length - 3) + "y";
      } else if (finalEs.includes(word[word.length - 3])) {
        return word.substring(0, word.length - 2);
      }
    }
    return word.substring(0, word.length - 1);
  }
  return word;
}
function splitAndTrim(array) {
  const newArray = array.split(",").map((e) => e.trim());
  return newArray;
}

//Endpoints
router.post("/", async (req, res, next) => {
  try {
    const { ingredients } = req.body;
    const ingredientList = splitAndTrim(ingredients).map((e) => checkPlural(e));
    const ingredientsFound = await Ingredient.findAll({
      where: {
        [Op.or]: ingredientList.map((e) => {
          const search = { name: { [Op.iLike]: `%${e}%` } };
          return search;
        }),
      },
    });
    if (!ingredientsFound.length > 0) {
      return res
        .status(400)
        .send({ message: "No one of the ingredients were found" });
    }

    const findByIngredient = await Recipe.findAll({
      include: [
        {
          model: Ingredient,
          where: {
            [Op.or]: ingredientList.map((e) => {
              const search = { name: { [Op.iLike]: `%${e}%` } };
              return search;
            }),
          },
        },
      ],
    });
    if (findByIngredient.length > 0) {
      const response = {
        searchInput: ingredientList,
        activeSearch: ingredientsFound.map((e) => e.name),
        recipes: findByIngredient,
      };

      return res.status(200).send(response);
    } else {
      return res.status(400).send({
        message: "We could'n find any recipe with the selected ingredients.",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const recipe = await Recipe.findByPk(id, {
      include: [{ model: Ingredient }],
    });

    const recipes = await Rating.findAll({ where: { recipeId: id } });
    const rating =
      recipes.reduce(function (sum, current) {
        return sum + current.rating;
      }, 0) / recipes.length;

    res.send({
      recipe,
      rating: { averageRating: rating, quantity: recipes.length },
    });
  } catch {
    next(e);
  }
});

router.get("/rating/:recipeId", async (req, res, next) => {
  const recipeId = req.params.recipeId;
  try {
    const recipes = await Rating.findAll({ where: { recipeId } });
    const rating =
      recipes.reduce(function (sum, current) {
        return sum + current.rating;
      }, 0) / recipes.length;

    res.send({ rating, quantity: recipes.length });
  } catch {
    next(e);
  }
});

// router.get("/rating/all/1", async (req, res, next) => {
//   try {
//     const recipeId = [1, 2, 3];
//     const recipes = await Rating.findAll({
//       where: {
//         [Op.or]: recipeId.map((e) => {
//           const search = { recipeId: e };
//           return search;
//         }),
//       },
//     });
//     const response = recipes.map((e) => {
//       return { recipeId: e.recipeId, rating: e.rating };
//     });
//     // recipes.reduce(function (sum, current) {
//     //   return sum + current.rating;
//     // }, 0) / recipes.length;

//     res.send(response);
//   } catch {
//     next(e);
//   }
// });

module.exports = router;
