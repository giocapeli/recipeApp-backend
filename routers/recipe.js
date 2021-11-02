const { Router } = require("express");
const Recipe = require("../models/").recipe;
const User = require("../models/").user;
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
    //const bodylist = "milk, apples";
    const ingredientList = splitAndTrim(ingredients).map((e) => checkPlural(e));

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
      return res.status(200).send(findByIngredient);
    } else {
      return res
        .status(400)
        .send({ message: "No one of the ingredients was found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
