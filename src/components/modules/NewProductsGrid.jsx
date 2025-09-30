import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";

export default function NewProductsGrid({
  title = { title },
  linkHref = { linkHref },
  products = [],
}) {
  return (
    <div className="my-6">
      {/* عنوان و لینک مشاهده همه */}
      <SectionHeader title={title} linkHref={linkHref} />

      {/* موبایل: flex + scroll */}
      <div className="md:hidden overflow-x-auto" style={{ direction: "rtl" }}>
        <div className="flex gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className={`flex-shrink-0`}
              style={{ width: "180px" }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* دسکتاپ: فقط تعداد مشخص محصول */}
      <div
        className={`hidden md:grid md:grid-cols-5 gap-4`}
        style={{ direction: "rtl" }}
      >
        {products.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
