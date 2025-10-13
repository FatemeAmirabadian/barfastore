import ProductCard from "./modules/ProductCard";
import PublicLayout from "./layouts/PublicLayout";

export default async function ProductsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`);
  const products = await res.json();
  console.log(products);
  return (
    <PublicLayout>
      <div className="py-8 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse flex-cols-2 sm:flex-cols-3 md:flex-cols-4 xl:flex-cols-5 gap-4">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </PublicLayout>
  );
}
