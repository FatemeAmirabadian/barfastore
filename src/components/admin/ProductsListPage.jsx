"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { formatPriceToFarsi } from "../../../lib/helpers";

export default function ProductListPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // دریافت محصولات هنگام لود کامپوننت
  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      setLoading(true);
      const response = await fetch("/api/products");
      if (response.ok) {
        const result = await response.json();
        setProducts(result);
      } else {
        alert("❌ خطا در دریافت محصولات");
      }
    } catch (error) {
      alert("❌ خطا در ارسال درخواست");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteProduct(productId) {
    if (!confirm("آیا از حذف این محصول مطمئن هستید؟")) return;

    try {
      const response = await fetch("/api/products", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: productId }),
      });

      const result = await response.json();

      if (result.success) {
        // آپدیت لیست محلی
        setProducts((prev) => prev.filter((p) => p.id !== productId));
        alert("✅ محصول حذف شد");
      } else {
        alert("❌ " + result.error);
      }
    } catch (error) {
      alert("❌ خطا در حذف محصول");
      console.error(error);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl">⏳</div>
          <div>در حال بارگذاری محصولات...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-5 text-center">لیست محصولات</h1>
      <div className="text-xl font-bold mb-5 text-right">
        <Link
          href={"/admin/products/addProduct"}
          className="bg-blue-300 hover:bg-blue-500 transition text-white px-2 py-1 rounded-md"
        >
          افزودن محصول +
        </Link>
      </div>

      <div className="flex flex-col-reverse gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex flex-col gap-2 bg-white shadow-md rounded-xl overflow-hidden p-2"
          >
            {/* اسم و محصول و دکمه حذف و اضافه */}
            <div className="flex flex-row justify-between items-center">
              <div className="grid grid-cols-1 gap-3 sm:ml-5">
                <button className="p-1 bg-green-100 hover:bg-green-300 rounded-md text-xs sm:text-sm ">
                  <Link href={`/admin/products/${p.slug}`}>ویرایش محصول</Link>
                </button>
                <button
                  className="p-1 bg-red-100 hover:bg-red-300 rounded-md text-xs sm:text-sm"
                  onClick={() => deleteProduct(p.id)}
                >
                  حذف محصول
                </button>
              </div>
              {/* تصویر اصلی */}
              {p.images && p.images.length > 0 && (
                <div className="flex gap-1">
                  <h2 className="font-semibold text-sm text-right mt-5">
                    {p.name}
                  </h2>
                  <img
                    src={p.images[0].url}
                    alt={p.name}
                    className="w-[15vw] h-[15vh] object-cover"
                  />
                </div>
              )}
            </div>
            {/* اطلاعات محصول */}
            <div className="p-4 flex flex-row-reverse justify-start items-center gap-5 sm:gap-20 text-right">
              <div className="grid grid-col items-center gap-2">
                <span className="text-gray-600 line-through">
                  {p.discountPercent > 0
                    ? formatPriceToFarsi(
                        p.price + (p.price * p.discountPercent) / 100
                      )
                    : null}
                </span>
                <span className="text-green-600 font-bold flex flex-row-reverse gap-1">
                  <span>{formatPriceToFarsi(p.price)}</span>
                  <span>تومان</span>
                </span>
              </div>
              <h2 className="text-red-500 text-sm sm:text-lg">
                {p.discountPercent > 0 &&
                  `${formatPriceToFarsi(p.discountPercent)}% :تخفیف`}
              </h2>
              <h2 className="text-red-500 text-sm sm:text-lg">
                {p.discountPercent > 0 &&
                new Date(p.discountEnd).getTime() > Date.now() ? (
                  <div className="flex flew-row-reverse gap-1">
                    <span>روز دیگر</span>
                    <span>
                      {formatPriceToFarsi(
                        Math.ceil(
                          (new Date(p.discountEnd).getTime() - Date.now()) /
                            (1000 * 3600 * 24)
                        )
                      )}{" "}
                    </span>
                  </div>
                ) : null}
              </h2>
            </div>
            {/* رنگ‌ها */}
            {p.colors && p.colors.length > 0 && (
              <div className="flex flex-row-reverse flex-wrap gap-1 mt-auto">
                {p.colors.map((c, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-full border text-xs sm:text-sm flex items-center gap-1"
                  >
                    <span>{c}</span>
                    <span className="text-gray-500 text-[11px]">
                      ({p.colorQuantities?.[c] ?? 0})
                    </span>
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
