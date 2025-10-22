import { getArticles } from "../../lib/helpers";
import { ArticleCard } from "./modules/NewArticles";

export default async function ArticlesPage() {
  const articles = await getArticles();
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <p className="text-xl font-semibold text-center mb-5">مقالات</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
        {articles.map((article, index) => (
          <ArticleCard article={article} key={index} />
        ))}
      </div>
    </div>
  );
}
