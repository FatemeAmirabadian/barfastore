import { getSliceNewProduct } from "../../../lib/api";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";

export default async function ProductsPage() {
  const products = (await getSliceNewProduct()) || [];

  return (
    <>
      <SectionHeader
        title="جدیدترین محصولات"
        linkHref="/products"
      />
      {/* کانتینر اسکرول */}
      <div className="overflow-x-auto" style={{ direction: "rtl" }}>
        <div className="flex gap-4 sm:grid sm:grid-cols-4 xl:grid-cols-5 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 sm:flex-shrink sm:w-auto"
            >
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
