export function getDiscountedPrice(product) {
    const today = new Date();
    const discountValid =
      product.discountPercent > 0 &&
      new Date(product.discountEndDate) >= today;
  
    if (discountValid) {
      return product.price - (product.price * product.discountPercent) / 100;
    }
    return product.price;
  }
  