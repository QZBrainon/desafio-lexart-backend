const { User } = require("../models");

const createUser = async (userPayload) => {
  const user = await User.create(userPayload);
  return user;
};

const getUserById = async (userPayload) => {
  const user = await User.findOne({ where: { id: userPayload.id } });
  return user;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const updateUser = async (userId, updatedUserData) => {
  const updatedUser = await User.update(updateUserData, {
    where: { id: userId },
  });
  return updateUser;
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
