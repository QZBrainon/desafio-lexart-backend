const { User } = require("../models");

const createUser = async (userPayload) => {
  const user = await User.create(userPayload);
  return user;
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
};
