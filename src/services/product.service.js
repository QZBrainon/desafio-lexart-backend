const { Product } = require("../models");

const createProduct = async (productPayload) => {
  const product = await Product.create(productPayload);
  return product;
};

const getAllProducts = async () => {
  const allProducts = await Product.findAll();
  return allProducts;
};

const getProductById = async (productId) => {
  const product = await Product.findOne({ where: { id: productId } });
  return product;
};

const updateProduct = async (userId, updatedUserData) => {
  const product = await Product.update(updatedUserData, {
    where: { id: userId },
  });
  return product;
};

const deleteProduct = async (productId) => {
  await Product.destroy({ where: { id: productId } });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
