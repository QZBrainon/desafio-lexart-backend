const { User } = require("../models");

const createUser = async (userPayload) => {
  try {
    const user = await User.create(userPayload);
    return user;
  } catch (error) {
    throw new Error("Email already taken");
  }
};

module.exports = { createUser };
