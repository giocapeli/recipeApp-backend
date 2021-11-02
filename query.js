const User = require("./models").user;
const Recipe = require("./models").recipe;

// async function getUsersWithRecipes() {
//   const users = await User.findAll({
//     include: { model: Recipe, as: "owner" }, //que
//   });
//   return users.map((data) => data.get({ plain: true }));
// }
// console.log(getUsersWithRecipes());

// async function getUsersWithRecipes() {
//   const users = await User.findByPk(2, {
//     include: [
//       { model: Recipe, as: "owner" },
//       { model: Recipe, as: "favorites" },
//       { model: Recipe, as: "ratings" },
//     ],
//   });
//   return console.log(users);
// }
// getUsersWithRecipes();

async function getUsersWithRecipes2() {
  const users = await User.findOne({
    where: { email: "admin@admin.com" },
    include: [
      { model: Recipe, as: "owner" },
      { model: Recipe, as: "favorites" },
      { model: Recipe, as: "ratings" },
    ],
  });
  return console.log(users);
}
getUsersWithRecipes2();

// //getUsersWithRecipes().then((data) => console.log(data));

// const bodyString = "Milk, Butter, onion";
// const bodyArray = bodyString.split(",");
// const bodySplit = bodyArray.map((e) => e.trim());

// function array1() {
//   const stringx = "banana,onion,potato";
//   const arrayx = stringx.split(",");
//   return console.log(bodySplit);
// }
// //array1();

// function splitAndTrim(array) {
//   const newArray = array.split(",").map((e) => e.trim());
//   return newArray;
// }

// function checkPlural(word) {
//   const finalEs = ["s", "h", "x", "z"];
//   if (word[word.length - 1] === "s") {
//     if (word[word.length - 2] === "e") {
//       if (word[word.length - 3] === "i") {
//         return word.substring(0, word.length - 3) + "y";
//       } else if (finalEs.includes(word[word.length - 3])) {
//         return word.substring(0, word.length - 2);
//       }
//     }
//     return word.substring(0, word.length - 1);
//   }
// }
// console.log(checkPlural("marshes"));
// const ingredients = ["milk", "oil"];
// const recipeResults = [
//   {
//     name: "x",
//     ingredients: [{ name: "milk" }, { name: "oil" }, { name: "broccoli" }],
//   },
//   {
//     name: "y",
//     ingredients: [{ name: "milk" }, { name: "butter" }, { name: "broccoli" }],
//   },
//   {
//     name: "z",
//     ingredients: [{ name: "milk" }, { name: "oil" }, { name: "ginger" }],
//   },
// ];

// function orderRecipes(ingredients, recipesResults) {
//   newArray = recipesResults.map((recipe) => {
//     return {
//       recipe,
//       ingredientsFound: [
//         ...recipe.ingredients.filter((ingredient) =>
//           ingredients.includes(ingredient.name)
//         ),
//       ].map((e) => e.name),
//     };
//   });
//   return newArray;
// }

// console.log(orderRecipes(ingredients, recipeResults));
