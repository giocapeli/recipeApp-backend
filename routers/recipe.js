const { Router, response } = require("express");
const Recipe = require("../models/").recipe;
const User = require("../models/").user;
const Rating = require("../models/").recipe_user_rating;
const Favorite = require("../models/").recipe_user_favorite;
const Ingredient = require("../models/").ingredient;
const { Op } = require("sequelize");
const router = new Router();
//import { checkPlural, splitAndTrim } from "../functions/functions";

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
      return word.substring(0, word.length - 2);
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
//Post to get a list of recipes using keywords
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
        { model: Ingredient, through: { attributes: ["quantity"] } },
        { model: User, as: "ratings", through: { attributes: ["rating"] } },
      ],
    });

    if (findByIngredient.length > 0) {
      const response = {
        searchInput: ingredientList,
        activeSearch: ingredientsFound.map((e) => e.name),
        recipes: findByIngredient.map((e) => {
          return {
            title: e.title,
            id: e.id,
            imageUrl: e.imageUrl,
            userId: e.userId,
            ratings: e.ratings.map((e) => e.recipe_user_ratings),
          };
        }),
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

//Get a full recipe by id
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const recipe = await Recipe.findByPk(id, {
      include: [
        { model: Ingredient, through: { attributes: ["quantity"] } },
        { model: User, as: "ratings", through: { attributes: ["rating"] } },
      ],
    });
    const { title, imageUrl, content, description, ingredients, ratings } =
      recipe;
    const response = {
      title,
      imageUrl,
      content,
      description,
      ingredients,
      ratings: ratings.map((e) => e.recipe_user_ratings),
    };

    res.send(response);
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

router.post("/favorite", async (req, res, next) => {
  const { userId, recipeId } = req.body;

  try {
    const favorite = await Favorite.findOne({
      where: { recipeId, userId },
    });

    if (favorite) {
      const destroy = await Favorite.destroy({
        where: {
          userId,
          recipeId,
        },
      });
      res.send({ favorite, message: "deleted" });
    } else {
      const created = await Favorite.create({ userId, recipeId });
      res.send({ favorite: created, message: "created" });
    }
  } catch {
    next(e);
  }
});

router.patch("/rating", async (req, res, next) => {
  const { userId, recipeId, rating } = req.body;

  try {
    const favorite = await Rating.findOne({
      where: { recipeId, userId },
    });

    if (favorite) {
      const update = await favorite.update({ rating });
      res.send({ favorite, message: "Updated" });
    } else {
      const created = await Rating.create({ userId, recipeId, rating });
      res.send({ favorite, created, message: "Created" });
    }
  } catch {
    next(e);
  }
});

router.post("/createrecipe", async (req, res, next) => {
  const { title, description, content, imageUrl } = req.body;
  const userId = 1;
  try {
    const newRecipe = await Recipe.create({
      title,
      description,
      content,
      imageUrl,
      userId,
    });
    res.send(newRecipe);
  } catch {
    next(e);
  }
});

router.post("/checkingredient", async (req, res, next) => {
  let { name } = req.body;
  name = checkPlural(name);
  try {
    const findIngredient = await Ingredient.findOne({
      where: { name: { [Op.iLike]: `%${name}%` } },
    });
    if (findIngredient) {
      res.send(findIngredient);
    } else {
      const newIngredient = await Ingredient.create({ name });
      res.send({ message: "Not Found, creating:", newIngredient });
    }
  } catch {
    next(e);
  }
});

module.exports = router;
