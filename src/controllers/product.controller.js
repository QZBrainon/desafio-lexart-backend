const productService = require("../services/product.service.js");
const throwHttpError = require("../utils/throwHttpError.js");

const createProduct = async (req, res) => {
  try {
    const productPayload = req.normalizedPayload;
    const product = await productService.createProduct(productPayload);
    return res.status(201).json({ product });
  } catch (error) {
    throwHttpError("Product creation failed", 500);
  }
};

const getProductById = async (req, res) => {
  const productId = req.params.id;
  const product = await productService.getProductById(productId);

  if (!product) {
    throwHttpError("Product not found", 404);
  }

  return res.status(200).json(product);
};

const getAllProducts = async (_req, res) => {
  const allProducts = await productService.getAllProducts();
  return res.status(200).json(allProducts);
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const updatedProductData = req.normalizedPayload;
  const updatedProduct = await productService.updateProduct(
    productId,
    updatedProductData
  );

  if (!updatedProduct) {
    throwHttpError("Could not update product", 400);
  }

  return res.status(200).json({ product: updatedProduct });
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await productService.deleteProduct(productId);

    return res.status(204).end();
  } catch (error) {
    throwHttpError("Failed to delete product", 500);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
