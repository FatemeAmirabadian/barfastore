import Image from "next/image";
import { getProductBySlug } from "../../lib/helpers";
import PublicLayout from "./layouts/PublicLayout";
import ProductActions from "../components/modules/ProductAction";
import ProductTabs from "./elements/ProductTabs";
import SectionCard from "./modules/SectionCard";

export default async function ProductDetailPage({ params }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);
  console.log(product);
  const imageUrl =
    product.images?.[0]?.url || "https://via.placeholder.com/150";

  if (!product) {
    return <p className="text-center mt-10">محصول یافت نشد</p>;
  }

  return (
    <PublicLayout>
      <SectionCard><div className="bg-white rounded-xl mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl p-5 mx-auto">
        {/* عکس محصول */}
        <div className="relative w-full h-[50vh] order-1 md:order-2">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* اکشن‌های محصول: لایک، انتخاب رنگ، تعداد، افزودن به سبد خرید */}
        <div className="order-2 md:order-1 md:col-span-2 px-2">
          <ProductActions product={product} />
        </div>
      </div>
      <ProductTabs product={product} /></SectionCard>
    </PublicLayout>
  );
}
