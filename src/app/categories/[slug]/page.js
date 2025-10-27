import React from "react";
import SectionCard from "@/components/modules/SectionCard";
import ProductCard from "@/components/modules/ProductCard";
import { getCategories, getProducts } from "../../../../lib/helpers";
import PublicLayout from "@/components/layouts/PublicLayout";

const page = async ({ params }) => {
  const { slug } = params;
  const categories = await getCategories();
  const category = categories.find((cat) => cat.slug === slug);
  if (!category) return <div>دسته یافت نشد</div>;
  const products = await getProducts();
  const categoryProducts = products.filter((p) => p.categoryId === category.id);

  return (
    <PublicLayout>
      <SectionCard>
      <h1 className="text-2xl font-bold mb-5 text-center">{categoryProducts.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 text-right">
        {categoryProducts.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </SectionCard>
    </PublicLayout>
  );
};

export default page;
