import Link from "next/link";
import { getSliceNewDiscountedProducts } from "../../../lib/api";
import SectionHeader from "./SectionHeader";
import ProductCard from "./ProductCard";

export default async function ProductsPage() {
  const products = (await getSliceNewDiscountedProducts()) || [];

  return (
    <>
      <SectionHeader
        title="محصولات تخفیف دار"
        linkHref="/discounts"
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
