"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function CategoriesListPage() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  // دریافت دسته بندیها هنگام لود کامپوننت
  useEffect(() => {
    getCategories();
  }, []);


  async function getCategories() {
    try {
      setLoading(true);
      const response = await fetch("/api/categories");
      if (response.ok) {
        const result = await response.json();
        setCategories(result);
      } else {
        alert("❌ خطا در دریافت دسته بندی");
      }
    } catch (error) {
      alert("❌ خطا در ارسال درخواست");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteCategory(categoryId) {
    if (!confirm("آیا از حذف این دسته بندی مطمئن هستید؟")) return;

    try {
      const response = await fetch("/api/categories", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: categoryId }),
      });

      const result = await response.json();

      if (result.success) {
        // آپدیت لیست محلی
        setCategories((prev) => prev.filter((p) => p.id !== categoryId));
        alert("✅ دسته بندی حذف شد");
      } else {
        alert("❌ " + result.error);
      }
    } catch (error) {
      alert("❌ خطا در حذف دسته بندی");
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
      <h1 className="text-2xl font-bold mb-5 text-center">لیست دسته بندی ها</h1>
      <div className="text-xl font-bold mb-5 text-right">
        <Link
          href={"/admin/categories/addCategory"}
          className="bg-blue-300 hover:bg-blue-500 transition text-white px-2 py-1 rounded-md"
        >
          افزودن دسته بندی +
        </Link>
        <Link
          href={"/categories"}
          className="bg-purple-300 hover:bg-purple-500 transition text-white px-2 py-1 mr-5 rounded-md"
        >
          فروشگاه
        </Link>
      </div>

      <div className="flex flex-col-reverse gap-6">
        {categories.map((p) => (
          <div
            key={p.id}
            className="flex flex-col gap-2 bg-white shadow-md rounded-xl overflow-hidden p-2"
          >
            {/* اسم و دسته بندی و دکمه حذف و اضافه */}
            <div className="flex flex-row justify-between items-center">
              <div className="grid grid-cols-1 gap-3 sm:ml-5">
                <button className="p-1 bg-green-100 hover:bg-green-300 rounded-md text-xs sm:text-sm ">
                  <Link href={`/admin/categories/${p.slug}`}>
                    ویرایش دسته بندی
                  </Link>
                </button>
                <button
                  className="p-1 bg-red-100 hover:bg-red-300 rounded-md text-xs sm:text-sm"
                  onClick={() => deleteCategory(p.id)}
                >
                  حذف دسته بندی
                </button>
              </div>

              <h2 className="font-semibold text-sm text-right mt-5">
                {p.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
