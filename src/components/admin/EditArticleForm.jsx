import React from "react";
import ArticleForm from "./ArticleForm";
import { getArticles } from "../../../lib/helpers";

async function EditArticleForm({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug); // دیکد کردن اسلاگ
    const articles = await getArticles();
  const article = articles.find((c) => c.slug === decodedSlug); // جستجو با اسلاگ دیکد شده

  return (
    <div>
      <ArticleForm mode="edit" initialData={article} />
    </div>
  );
}

export default EditArticleForm;
