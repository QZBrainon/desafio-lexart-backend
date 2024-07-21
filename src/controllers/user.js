const userService = require("../services/user.js");
const throwHttpError = require("../utils/throwHttpError.js");

const createUser = async (req, res, next) => {
  const userPayload = req.body;
  const user = await userService.createUser(userPayload);
  console.log(user);
  return res.status(201).json({ user });
};

const getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);

    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }

    return res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (_req, res, next) => {
  try {
    const allUsers = await userService.getAllUsers();
    return res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

// const getUserById = async (req, res) => {
//   const { id } = req.params;
//   const user = await userService.getUserById(id);
//   if (!user) return res.status(404).json({ message: "User not found" });
//   return res.status(200).json(user);
// };

// const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const updateData = req.body;

//   const user = await userService.updateUser(id, updateData);

//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   return res.status(200).json(user);
// };

// const deleteUser = async (req, res) => {
//   const userId = req.id;
//   await userService.deleteUser(userId);
//   return res.status(204).end();
// };

module.exports = {
  createUser,
  // getAllUsers,
  // getUserById,
  // updateUser,
  // deleteUser,
};
