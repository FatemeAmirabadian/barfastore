"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ArticlesListPage() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  // دریافت مقاله ها هنگام لود کامپوننت
  useEffect(() => {
    getArticles();
  }, []);

  async function getArticles() {
    try {
      setLoading(true);
      const response = await fetch("/api/articles");
      if (response.ok) {
        const result = await response.json();
        setArticles(result);
      } else {
        alert("❌ خطا در دریافت مقاله");
      }
    } catch (error) {
      alert("❌ خطا در ارسال درخواست");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteArticle(articleId) {
    if (!confirm("آیا از حذف این مقاله مطمئن هستید؟")) return;

    try {
      const response = await fetch("/api/articles", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: articleId }),
      });

      const result = await response.json();

      if (result.success) {
        // آپدیت لیست محلی
        setArticles((prev) => prev.filter((p) => p.id !== articleId));
        alert("✅ مقاله حذف شد");
      } else {
        alert("❌ " + result.error);
      }
    } catch (error) {
      alert("❌ خطا در حذف مقاله");
      console.error(error);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl animate-spin">⏳</div>
          <div dir="rtl">در حال بارگذاری...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-5 text-center">لیست مقاله ها</h1>
      <div className="text-xl font-bold mb-5 text-right">
        <Link
          href={"/admin/articles/addArticle"}
          className="bg-blue-300 hover:bg-blue-500 transition text-white px-2 py-1 rounded-md"
        >
          افزودن مقاله +
        </Link>
        <Link
          href={"/articles"}
          className="bg-purple-300 hover:bg-purple-500 transition text-white px-2 py-1 mr-5 rounded-md"
        >
          فروشگاه
        </Link>
      </div>

      <div className="flex flex-col-reverse gap-6">
        {articles.map((p) => (
          <div
            key={p.id}
            className="flex flex-col gap-2 bg-white shadow-md rounded-xl overflow-hidden p-2"
          >
            {/* اسم و مقاله و دکمه حذف و اضافه */}
            <div className="flex flex-row justify-between items-center">
              <div className="grid grid-cols-1 gap-3 sm:ml-5">
                <button className="p-1 bg-green-100 hover:bg-green-300 rounded-md text-xs sm:text-sm ">
                  <Link href={`/admin/articles/${p.slug}`}>ویرایش مقاله</Link>
                </button>
                <button
                  className="p-1 bg-red-100 hover:bg-red-300 rounded-md text-xs sm:text-sm"
                  onClick={() => deleteArticle(p.id)}
                >
                  حذف مقاله
                </button>
              </div>

              <div className="flex flex-col">
                <h2 className="font-semibold text-sm text-right mt-5">
                  {p.title}
                </h2>
                <p className="font-semibold text-sm text-right mt-5">
                  {p.slug}
                </p>
                <p className="hidden md:block text-sm text-right truncate  mt-5 max-w-[50vw]" dir="rtl">
                  {p.excerpt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
