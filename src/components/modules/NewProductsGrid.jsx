import NewProductCard from "./NewProductCard";
import SectionHeader from "./SectionHeader";

export default function NewProductsGrid({ title, linkHref, products = [] }) {
  return (
    <div className="my-6">
      {/* عنوان و لینک مشاهده همه */}
      <SectionHeader title={title} linkHref={linkHref} />

      {/* موبایل: اسکرول افقی */}
      <div className="md:hidden overflow-x-auto" style={{ direction: "rtl" }}>
        <div className="flex gap-4">
          {products.map((product) => (
            <NewProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* دسکتاپ: گرید ۵تایی */}
      <div
        className="hidden md:grid md:grid-cols-5 gap-4"
        style={{ direction: "rtl" }}
      >
        {products.slice(0, 5).map((product) => (
          <NewProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
