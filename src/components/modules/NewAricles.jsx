import { articles } from "../../../data/articles";
import Link from "next/link";
import Image from "next/image";

export default function NewArticles() {
  const newArticles = articles.slice(0, 2);

  return (
    <div className="mb-20 md:mb-5">
      {/* عنوان و لینک مشاهده همه */}
      <div className="flex justify-between items-center mb-2 px-3">
        <Link
          href={"/blogs"}
          className="inline-flex px-1 sm:px-2 sm:py-1 rounded-3xl text-white bg-blue-500 hover:bg-blue-700 border-2 border-blue-600 shadow-md hover:shadow-xl transition-all duration-200"
        >
          مشاهده همه
        </Link>
        <h2 className="text-xl sm:text-3xl">جدیدترین مقالات</h2>
      </div>
      <div className="my-6 px-4 max-w-6xl mx-auto">
        {/* یک ردیف ۴ کارت */}
        <div
          className="grid grid-cols-2 gap-4"
          style={{ direction: "rtl" }}
        >
          {newArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ArticleCard({ article }) {
  return (
    <Link href={`/blogs/${article.slug}`}>
      <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 h-[45vh]">
        {/* تصویر */}
        <div className="relative w-full h-[60%]">
          <Image
            src={article.image || "/placeholder.png"}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* متن */}
        <div className="flex flex-col justify-between items-end text-right p-3 h-[40%]">
          <h3 className="text-sm font-medium line-clamp-2 text-gray-800">
            {article.title}
          </h3>
          {article.excerpt && (
            <p className="text-xs text-gray-600 line-clamp-2 mt-2" dir="rtl">
              {article.excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
