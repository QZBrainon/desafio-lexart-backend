const userService = require("../services/user.service.js");
const throwHttpError = require("../utils/throwHttpError.js");

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await userService.login(email, password);
  return res.status(200).json({ token });
};

const createUser = async (req, res) => {
  try {
    const userPayload = req.body;
    const token = await userService.createUser(userPayload);
    return res.status(201).json({ token });
  } catch (error) {
    throwHttpError("User already exists", 409);
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  const user = await userService.getUserById(userId);

  if (!user) {
    throwHttpError("User not found", 404);
  }

  return res.status(200).json({ user });
};

const getAllUsers = async (_req, res) => {
  const allUsers = await userService.getAllUsers();
  return res.status(200).json(allUsers);
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;
  const updatedUser = await userService.updateUser(userId, updatedUserData);
  if (updatedUser[0] === 0) {
    throwHttpError("Could Not Update", 400);
  }
  return res.status(200).json({ user: updatedUser });
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
  login,
};
