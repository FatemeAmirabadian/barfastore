import React from 'react'
import { categories } from '../../../../data/categories';
import { products } from '../../../../data/products'; // مسیر فایل محصولات
import Image from 'next/image';
import SectionCard from '@/components/modules/SectionCard';
import ProductCard from '@/components/modules/ProductCard';

const page =  ({ params }) => {
    const { slug } = params;
    const category = categories.find((cat) => cat.slug === slug);
    if (!category) return <div>دسته یافت نشد</div>;

    // فیلتر محصولات مرتبط با دسته
    const categoryProducts = products.filter(p => p.category === slug);
    console.log(categoryProducts);

    return (
      <SectionCard>
        <h1 className="text-2xl font-bold mb-5 text-center">{category.name}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 text-right">
          {categoryProducts.map((product,idx) => (
            <ProductCard key={idx} product={product}/>
          ))}
        </div>
        </SectionCard>
    );
};

export default page;