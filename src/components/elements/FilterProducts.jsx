"use client";
import { useState } from "react";

export default function FilterProducts({ products, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* دکمه‌های دسته‌بندی */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full border transition ${
              selectedCategory === cat.id
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* نمایش محصولات */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="border rounded-2xl p-3 text-center shadow-sm hover:shadow-lg transition"
          >
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{p.price.toLocaleString()} تومان</p>
          </div>
        ))}
      </div>
    </div>
  );
}
