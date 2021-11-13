const { Router } = require("express");

const Ingredient = require("../models/").ingredient;
const router = new Router();

router.get("/all", async (req, res, next) => {
  try {
    const allIngredients = await Ingredient.findAll();
    res.send(allIngredients);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
