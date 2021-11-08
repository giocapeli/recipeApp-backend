const { Router } = require("express");

const Ingredient = require("../models/").ingredient;
const router = new Router();

router.get("/all", async (req, res, next) => {
  try {
    const allIngredients = await Ingredient.findAll();
    res.send(allIngredients);
  } catch {
    next(e);
  }
});

module.exports = router;
