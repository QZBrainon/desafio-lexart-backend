const { User } = require("../models");

const createUser = async (userPayload) => {
  const user = await User.create(userPayload);
  return user;
};

module.exports = { createUser };
