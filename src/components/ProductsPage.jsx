import ProductCard from "./modules/ProductCard";
import PublicLayout from "./layouts/PublicLayout";
import { getCategories, getProducts } from "../../lib/helpers";


export default async function ProductsPage() {
  const products = await getProducts();
  const categories = await getCategories();
  const categoryId = categories.map
  console.log(categories);
  return (
    <PublicLayout>
      <div className="py-8 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </PublicLayout>
  );
}
