import React from "react";
import { articles } from "../../../../data/articles";
import SectionCard from "../../../components/modules/SectionCard";
import Image from "next/image";

export default function page({ params }) {
  const { slug } = params;
  const article = articles.find((art) => art.slug === slug);

  if (!article)
    return <div className="text-center mt-10 text-red-500">مقاله یافت نشد</div>;

  return (
    <SectionCard>
      <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-6 md:p-10">
        {/* عنوان */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
          {article.title}
        </h1>

        {/* تصویر */}
        <div className="w-full h-[50vh] relative mb-6 rounded-xl overflow-hidden shadow-sm">
          <Image
            src={article.image || "/placeholder.png"}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* متن مقاله */}
        <div className=" max-w-full mx-auto text-gray-700 text-right" dir="rtl">
          {article.excerpt}
        </div>
      </div>
    </SectionCard>
  );
}
