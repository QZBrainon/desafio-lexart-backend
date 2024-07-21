const normalizeProductPayload = require("../utils/normalizeProductPayload");
const throwHttpError = require("../utils/throwHttpError");

const productHandler = (req, _res, next) => {
  const productPayload = req.body;
  const normalizedPayload = normalizeProductPayload(productPayload);
  if (!normalizedPayload) {
    throwHttpError("Invalid product payload structure", 400);
  }
  req.normalizedPayload = normalizedPayload;
  next();
};

module.exports = productHandler;
