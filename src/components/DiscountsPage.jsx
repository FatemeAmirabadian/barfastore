import { getDiscountedProducts } from "../../lib/api";
import ProductCard from "./modules/ProductCard";

export default async function DiscountsPage() {
  const discountedProducts = await getDiscountedProducts()

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {discountedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
  );
}
