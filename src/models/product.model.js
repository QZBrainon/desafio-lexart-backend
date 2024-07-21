const ProductSchema = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    color: DataTypes.STRING,
  });

  return Product;
};

module.exports = ProductSchema;
