const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Recipe = require("../models/").recipe;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({
      where: { email },
      include: [
        { model: Recipe, as: "owner" },
        { model: Recipe, as: "favorites" },
        { model: Recipe, as: "ratings" },
      ],
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash

  // const user2 = await User.findOne({
  //   where: { email },
  //   include: [
  //     { model: Recipe, as: "owner" },
  //     { model: Recipe, as: "favorites" },
  //     { model: Recipe, as: "ratings" },
  //   ],
  // });
  // const owner = await Recipe.findAll({
  //   where: { userId: req.user.id },
  // });
  // const user2 = await User.findOne({
  //   where: { email },
  //   include: [
  //     { model: Recipe, as: "owner" },
  //     { model: Recipe, as: "favorites" },
  //     { model: Recipe, as: "ratings" },
  //   ],
  // });

  const user = await User.findByPk(req.user.id, {
    include: [
      { model: Recipe, as: "owner" },
      { model: Recipe, as: "favorites" },
      { model: Recipe, as: "ratings" },
    ],
  });

  delete user.dataValues["password"];
  //delete req.user.dataValues["password"];
  res.status(200).send(user);
  //res.status(200).send({ ...req.user.dataValues, owner });
});

module.exports = router;
