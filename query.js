const User = require("./models").user;
const Recipe = require("./models").recipe;

async function getUsersWithRecipes() {
  const users = await User.findAll({
    include: { model: Recipe, as: "owner" },
  });
  return users.map((data) => data.get({ plain: true }));
}

getUsersWithRecipes().then((data) => console.log(data));
