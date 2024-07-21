const express = require("express");
const userController = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/", userController.createUser);
userRouter.get("/:id", userController.getUserById);
userRouter.get("/", userController.getAllUsers);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = userRouter;
