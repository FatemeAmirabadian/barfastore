import { articles } from "../../../data/articles";
import Image from "next/image";
import Link from "next/link";

export default function ArticlesPage() {
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/blogs/${article.slug}`}
            className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* تصویر */}
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={article.image || "/placeholder.png"}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            {/* متن کارت */}
            <div className="p-2 flex flex-col justify-between h-24">
              <h3 className="text-sm font-bold line-clamp-2">{article.title}</h3>
              {article.expert && (
                <p className="text-xs text-gray-600 line-clamp-2 mt-1">
                  {article.expert}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
