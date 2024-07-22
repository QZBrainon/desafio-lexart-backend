require("dotenv").config();
const { User } = require("../models");
const generateToken = require("../utils/generateToken.js");
const throwHttpError = require("../utils/throwHttpError.js");

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throwHttpError("Invalid email or password", 404);
  if (user.password !== password) throwHttpError("Unauthorized", 401);

  const token = generateToken(user.id);
  return token;
};

const createUser = async (userPayload) => {
  const user = await User.create(userPayload);
  const token = generateToken(user.id);
  return token;
};

const getUserById = async (userId) => {
  const user = await User.findOne({ where: { id: userId } });
  return user;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const updateUser = async (userId, updatedUserData) => {
  const user = await User.update(updatedUserData, {
    where: { id: userId },
  });
  return user;
};

const deleteUser = async (userId) => {
  await User.destroy({ where: { id: userId } });
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  login,
};
