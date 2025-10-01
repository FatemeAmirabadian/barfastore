"use client";

import { useState } from "react";
import ProductSpecs from "./ProductSpecs";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("specs");

  return (
    <div className="mt-4 border-b border-gray-200">
      {/* تب‌ها */}
      <div className="flex flex-row-reverse">
        <button
          onClick={() => setActiveTab("specs")}
          className={`px-4 py-2 -mb-px border-b-2 text-sm md:text-md font-medium transition ${
            activeTab === "specs"
              ? "border-purple-500 text-purple-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          مشخصات محصول
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2 -mb-px border-b-2 text-sm md:text-md font-medium transition ${
            activeTab === "reviews"
              ? "border-purple-500 text-purple-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          نظرات کاربران
        </button>
      </div>

      {/* محتوای تب‌ها */}
      <div className="mt-4">
        {activeTab === "specs" && <div><p dir="rtl" style={{ unicodeBidi: "plaintext" }} className="text-right text-gray-800">{product.description}</p><ProductSpecs specs={product.specs}/></div>}

        {activeTab === "reviews" && (
          <div className="mt-2 flex flex-col gap-2">
            {product.comments?.map((cm, idx) => (
              <div
                key={idx}
                className="text-right border-b border-gray-300 pb-2"
              >
                <p className="text-gray-700">{cm}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
