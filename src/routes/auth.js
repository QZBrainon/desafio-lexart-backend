const express = require("express");
const userController = require("../controllers/user");

const authRouter = express.Router();

authRouter.post("/", userController.createUser);

module.exports = authRouter;
