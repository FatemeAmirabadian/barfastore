import ProductCard from "./modules/ProductCard";
import { products } from "../../data/products";
import PublicLayout from "./layouts/PublicLayout";

export default async function ProductsPage() {
  return (
    <PublicLayout>
      <div className="py-8 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </PublicLayout>
  );
}
