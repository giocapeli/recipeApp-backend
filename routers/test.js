const { Router } = require("express");

const Ingredient = require("../models/").ingredient;
const router = new Router();

const url = "https://www.bbc.co.uk/food/search?q=almond";

module.exports = router;
