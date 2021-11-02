const User = require("./models").user;
const Recipe = require("./models").recipe;

// async function getUsersWithRecipes() {
//   const users = await User.findAll({
//     include: { model: Recipe, as: "owner" }, //que
//   });
//   return users.map((data) => data.get({ plain: true }));
// }
async function getUsersWithRecipes() {
  const users = await User.findByPk(2, {
    include: [
      { model: Recipe, as: "owner" },
      { model: Recipe, as: "favorites" },
      { model: Recipe, as: "ratings" },
    ],
  });
  return console.log(users);
}
//getUsersWithRecipes();
//getUsersWithRecipes().then((data) => console.log(data));

const bodyString = "Milk, Butter, onion";
const bodyArray = bodyString.split(",");
const bodySplit = bodyArray.map((e) => e.trim());

function array1() {
  const stringx = "banana,onion,potato";
  const arrayx = stringx.split(",");
  return console.log(bodySplit);
}
//array1();

function splitAndTrim(array) {
  const newArray = array.split(",").map((e) => e.trim());
  return newArray;
}

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
}
console.log(checkPlural("marshes"));
