"use client";

import React from "react";
import { products } from "../../../data/products";
import Link from "next/link";

export default function ProductListPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-5 text-center">لیست محصولات</h1>
      <div className="text-xl font-bold mb-5 text-right">
        <Link
          href={"/admin/products/addProduct"}
          className="bg-blue-300 hover:bg-blue-500 transition text-white px-2 py-1 rounded-md"
        >
          افزودن محصول{" "}+
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex flex-col gap-2 bg-white shadow-md rounded-xl overflow-hidden p-2"
          >
            <div className="flex flex-row-reverse justify-between items-center">
              <div className="flex flex-row-reverse items-center text-right">
                {/* تصویر اصلی */}
                {p.images && p.images.length > 0 && (
                  <img
                    src={p.images[0].url}
                    alt={p.name}
                    className="w-[15vw] h-[15vh] object-cover"
                  />
                )}

                <div className="p-4 flex flex-col flex-1 justify-center items-end">
                  <h2 className="font-semibold text-sm mb-2">{p.name}</h2>

                  <div className="grid grid-col items-center gap-2 mb-2">
                    <span className="text-gray-600 line-through">
                      {p.discountPercent > 0
                        ? (
                            p.price +
                            (p.price * p.discountPercent) / 100
                          ).toLocaleString()
                        : null}
                    </span>
                    <span className="text-green-600 font-bold flex flex-row-reverse gap-1">
                      <span>{p.price.toLocaleString()}</span>
                      <span>تومان</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:ml-5">
                <button className="p-1 bg-green-100 hover:bg-green-300 rounded-md text-xs sm:text-sm ">
                  ویرایش محصول
                </button>
                <button className="p-1 bg-red-100 hover:bg-red-300 rounded-md text-xs sm:text-sm">
                  حذف محصول
                </button>
              </div>
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
