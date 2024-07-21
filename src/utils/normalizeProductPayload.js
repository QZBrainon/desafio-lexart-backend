const normalizeProductData = (productData) => {
  // Verifica se há um objeto aninhado e faz um flat nele
  if (productData.details) {
    const { details, ...rest } = productData;
    return { ...details, ...rest };
  } else if (Array.isArray(productData)) {
    // verifica se o DTO é um array e transforma para um array de products flattened
    const productArray = productData.flatMap((product) => {
      return product.data.map((item) => ({
        name: product.name,
        brand: product.brand,
        model: product.model,
        price: item.price,
        color: item.color,
      }));
    });
    return productArray;
  }
  return productData;
};

module.exports = normalizeProductData;
