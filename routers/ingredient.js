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

// const createdIngredients = await ingredientsToCreate.map((e) => {
//   const { name, found } = e;
//   name.toLowerCase();
//    if(e.found){
//   const newIngredient = RecipeIngredient.create({
//     name,
//   });
//   return newIngredient}
//  return e
// });
// const ingredientList = [...ingredientsFound, ...createdIngredients];
// const recipeIngredient = await ingredientList.map((e) => {
//   const { recipeId, ingredientId, quantity, unitOfMeasure } = e;
//   RecipeIngredient.create({
//     recipeId,
//     ingredientId,
//     quantity,
//     unitOfMeasure,
//   });
// });

module.exports = router;
