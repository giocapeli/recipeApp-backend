const { Router } = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const Ingredient = require("../models/").ingredient;
const router = new Router();

const url = "https://www.bbc.co.uk/food/search?q=almond";

router.get("/", async (req, res, next) => {
  try {
    const resourse = await axios.get(url);
    console.log(resourse.data);
    res.send({ response: resourse.data });
  } catch {
    next(e);
  }
});

module.exports = router;
