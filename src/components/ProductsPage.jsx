// import { getDiscountedPrice } from "../../lib/getDiscountedPrice";
import ProductCard from "./modules/ProductCard";
import { getProducts } from "../../lib/api";

export default async function ProductsPage() {
  const products = (await getProducts()) || [];
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => {
          return (
            <ProductCard key={product.id} product={product}/>
          );
        })}
      </div>
    </div>
  );
}
