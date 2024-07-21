const userService = require("../services/user.js");

const createUser = async (req, res, next) => {
  try {
    const userPayload = req.body;
    const user = await userService.createUser(userPayload);

    return res.status(201).json({ user });
  } catch (error) {
    error.status = 409;
    error.message = "Email already taken";
    next(error);
  }
};

// const getAllUsers = async (_req, res) => {
//   const allUsers = await userService.getAllUsers();
//   return res.status(200).json(allUsers);
// };

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
