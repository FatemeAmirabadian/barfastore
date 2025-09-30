import { articles } from "../../../data/articles";
import Link from "next/link";
import Image from "next/image";

export default function NewArticles() {
  const newArticles = articles.slice(0, 4);

  return (
    <>
      {/* عنوان و لینک مشاهده همه */}
      <div className="flex justify-between items-center mb-2 px-3">
        <Link
          href={"/blogs"}
          className="inline-flex px-2 py-1 sm:px-6 sm:py-2 rounded-3xl text-white bg-purple-500 hover:bg-purple-700 border-2 border-purple-600 shadow-md hover:shadow-xl transition-all duration-200"
        >
          مشاهده همه
        </Link>
        <h2 className="text-xl sm:text-3xl">جدیدترین مقالات</h2>
      </div>
      <div className="my-6 px-4 max-w-6xl mb-20 sm:mb-1 mx-auto">
        {/* موبایل: flex + scroll */}
        <div className="md:hidden overflow-x-auto" style={{ direction: "rtl" }}>
          <div className="flex gap-4">
            {newArticles.map((article) => (
              <div
                key={article.id}
                className="flex-shrink-0"
                style={{ width: "180px" }}
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>

        {/* دسکتاپ: یک ردیف ۴ کارت */}
        <div
          className="hidden md:grid md:grid-cols-4 gap-4"
          style={{ direction: "rtl" }}
        >
          {newArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}

function ArticleCard({ article }) {
  return (
    <Link href={`/blogs/${article.slug}`}>
      <div className="overflow-hidden hover:shadow-lg transition flex flex-col h-[50vh]">

        <div className="relative w-full h-[calc(60/100*100vh)]">
          <Image
            src={article.image || "/placeholder.png"}
            alt={article.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-center items-center py-1 h-[calc(40/100*100vh)] text-center">
          <h3 className="text-xs font-bold line-clamp-2">{article.title}</h3>
          {article.excerpt && (
            <p className="text-xs text-right text-gray-600 line-clamp-2 mt-1">
              {article.excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
