const { Router } = require("express");
const Recipe = require("../models/").recipe;
const User = require("../models/").user;
const Rating = require("../models/").recipe_user_rating;
const Favorite = require("../models/").recipe_user_favorite;
const Ingredient = require("../models/").ingredient;
const RecipeIngredient = require("../models/").recipe_ingredient;
const { Op } = require("sequelize");
const router = new Router();
const authMiddleware = require("../auth/middleware");
const { checkPlural, splitAndTrim } = require("../functions/functions");

//Post to get a list of recipes using keywords
router.post("/", async (req, res, next) => {
  try {
    const ingredientList = splitAndTrim(req.body.ingredients).map((e) =>
      checkPlural(e)
    );
    const ingredientsFound = await Ingredient.findAll({
      where: {
        [Op.or]: ingredientList.map((e) => {
          const search = { name: { [Op.iLike]: `%${e}%` } };
          return search;
        }),
      },
    });

    if (!ingredientsFound.length > 0) {
      return res.status(400).send({
        message:
          "Ingredient not found in the database. Try a different ingredient.",
        status: "Failure",
      });
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

    if (!findByIngredient.length > 0) {
      return res.status(400).send({
        message: "No results. Try a different ingredient.",
        status: "Failure",
      });
    }

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

    return res.status(200).send({
      ...response,
      message: `${response.recipes.length} recipe(s) found.`,
      status: "Success",
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
      dispatch(setMessage("danger", true, error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setMessage("danger", true, error.message));
    }
    dispatch(appDoneLoading());
  }
});

//Get a full recipe by id
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const recipe = await Recipe.findByPk(id, {
      include: [
        {
          model: Ingredient,
          through: { attributes: ["quantity", "unitOfMeasure"] },
        },
        { model: User, as: "ratings", through: { attributes: ["rating"] } },
      ],
    });
    if (!recipe) {
      return res.status(400).send({
        message: "Recipe doesn't exist.",
        status: "Failure",
      });
    }
    const { title, imageUrl, content, description, ingredients, ratings } =
      recipe;
    const response = {
      recipe: {
        title,
        imageUrl,
        content,
        description,
        ingredients,
        ratings: ratings.map((e) => e.recipe_user_ratings),
      },
    };

    res.send({ ...response, message: "Recipe found.", status: "Success" });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
      dispatch(setMessage("danger", true, error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setMessage("danger", true, error.message));
    }
    dispatch(appDoneLoading());
  }
});

router.get("/rating/:recipeId", authMiddleware, async (req, res, next) => {
  const recipeId = req.params.recipeId;
  try {
    const recipes = await Rating.findAll({ where: { recipeId } });
    if (!recipes) {
      return res.status(400).send({
        message: "Recipe doesn't exist.",
        status: "Failure",
      });
    }
    const rating =
      recipes.reduce(function (sum, current) {
        return sum + current.rating;
      }, 0) / recipes.length;

    res.send({
      message: "Recipe found.",
      rating,
      quantity: recipes.length,
      status: "Success",
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
      dispatch(setMessage("danger", true, error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setMessage("danger", true, error.message));
    }
    dispatch(appDoneLoading());
  }
});

router.post("/favorite", authMiddleware, async (req, res, next) => {
  const { userId, recipeId } = req.body;

  try {
    const owner = await Recipe.findOne({ where: { id: recipeId, userId } });
    if (owner) {
      return res.status(400).send({
        message: "You can't favorite your own recipe",
        status: "Failure",
      });
    }
    const favorite = await Favorite.findOne({
      where: { recipeId, userId },
      include: [
        {
          model: Recipe,
        },
      ],
    });
    if (favorite) {
      const destroy = await Favorite.destroy({
        where: {
          userId,
          recipeId,
        },
      });
      res.send({ favorite, message: "Unfavorited", status: "Success" });
    } else {
      const created = await Favorite.create({ userId, recipeId });
      const newFavorite = await Favorite.findByPk(created.id, {
        include: [
          {
            model: Recipe,
            include: [
              {
                model: User,
                as: "ratings",
                through: { attributes: ["rating"] },
              },
            ],
          },
        ],
      });
      res.send({
        favorite: newFavorite,
        message: "Favorited",
        status: "Success",
      });
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
      dispatch(setMessage("danger", true, error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setMessage("danger", true, error.message));
    }
    dispatch(appDoneLoading());
  }
});

router.patch("/rating", authMiddleware, async (req, res, next) => {
  const { userId, recipeId, rating } = req.body;

  try {
    const owner = await Recipe.findOne({ where: { id: recipeId, userId } });
    if (owner) {
      return res.status(400).send({
        message: "You can't rate your own recipe",
        status: "Failure",
      });
    }
    const response = await Rating.findOne({
      where: { recipeId, userId },
    });

    if (response) {
      const update = await response.update({ rating });
      res.send({ response, message: "Rating updated", status: "Success" });
    } else {
      const created = await Rating.create({ userId, recipeId, rating });
      res.send({
        response,
        created,
        message: "Rating created",
        status: "Success",
      });
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
      dispatch(setMessage("danger", true, error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setMessage("danger", true, error.message));
    }
    dispatch(appDoneLoading());
  }
});

router.post("/createrecipe", authMiddleware, async (req, res, next) => {
  const { title, description, content, imageUrl, userId } = req.body;
  const { ingredientList } = req.body;
  try {
    const newRecipe = await Recipe.create({
      title,
      description,
      content,
      imageUrl,
      userId,
    });
    for (const item of ingredientList) {
      if (!item.found) {
        const ingredient = await Ingredient.create({
          name: item.name,
        });
        const recipeIngredient = await RecipeIngredient.create({
          ingredientId: ingredient.id,
          recipeId: newRecipe.id,
          quantity: item.quantity,
          unitOfMeasure: item.unitOfMeasure,
        });
      } else {
        const recipeIngredient = await RecipeIngredient.create({
          ingredientId: item.id,
          recipeId: newRecipe.id,
          quantity: item.quantity,
          unitOfMeasure: item.unitOfMeasure,
        });
      }
    }
    res.send({
      ...newRecipe.dataValues,
      status: "Success",
      message: "New recipe created.",
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
      dispatch(setMessage("danger", true, error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setMessage("danger", true, error.message));
    }
    dispatch(appDoneLoading());
  }
});

module.exports = router;
