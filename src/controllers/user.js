const userService = require("../services/user.js");
const throwHttpError = require("../utils/throwHttpError.js");

const createUser = async (req, res) => {
  try {
    const userPayload = req.body;
    const user = await userService.createUser(userPayload);
    return res.status(201).json({ user });
  } catch (error) {
    throwHttpError("Email already taken", 409);
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);

    if (!user) {
      throwHttpError("User not found", 404);
    }

    return res.status(200).json({ user });
  } catch (error) {
    throwHttpError(error.message, 500);
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
  } catch (error) {
    throwHttpError(error.message, 500);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;
    const updatedUser = await userService.updateUser(userId, updatedUserData);
    return res.status(200).json({ user: updatedUser });
  } catch (error) {
    throwHttpError(error.message, 500);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await userService.deleteUser(userId);

    return res.status(204).end();
  } catch (error) {
    throwHttpError(error.message, 500);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
