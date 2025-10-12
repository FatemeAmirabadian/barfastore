"use client";

import React, { useState } from "react";

export default function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    images: "",
    colors: "",
    price: "",
    discountPercent: "",
    discountEnd: "",
    category: "",
    description: "",
    weight: "",
    dimensions: "",
    material: "",
    pages: "",
    colorQuantitiesJson: "{}",
  });
  const [result, setResult] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function makeSlug(text) {
    return text
      .toString()
      .normalize("NFKD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  function onSubmit(e) {
    e.preventDefault();

    const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Date.now();

    const images = form.images
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((url) => ({ url }));

    const colors = form.colors
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const price = parseInt(form.price || "0", 10);
    const discountPercent = parseInt(form.discountPercent || "0", 10);

    let colorQuantities = {};
    try {
      colorQuantities = JSON.parse(form.colorQuantitiesJson || "{}");
    } catch (err) {
      alert("فرمت colorQuantities باید JSON باشد، مثال: { \"صورتی\": 10 }");
      return;
    }

    const product = {
      id,
      name: form.name || "",
      slug: form.slug || makeSlug(form.name || "unnamed-product"),
      images,
      colors,
      price,
      discountPercent,
      discountEnd: form.discountEnd || null,
      createdAt: new Date().toISOString(),
      category: form.category || "",
      description: form.description || "",
      specs: {
        وزن: form.weight || "",
        ابعاد: form.dimensions || "",
        جنس: form.material || "",
        تعداد_برگ: form.pages || "",
      },
      comments: [],
      colorQuantities,
    };

    setResult(product);

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(JSON.stringify(product, null, 2)).catch(() => {});
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-3xl bg-white shadow-md rounded-2xl p-6 space-y-6 text-right"
        dir="rtl"
      >
        <h2 className="text-2xl font-semibold text-center">فرم محصول</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-sm">نام محصول</span>
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">اسلاگ (اختیاری)</span>
            <input name="slug" value={form.slug} onChange={handleChange} className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col md:col-span-2">
            <span className="text-sm">آدرس تصاویر (با کاما جدا کنید)</span>
            <input name="images" value={form.images} onChange={handleChange} placeholder="/images/a.jpg, /images/b.jpg" className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">رنگ‌ها</span>
            <input name="colors" value={form.colors} onChange={handleChange} className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">قیمت (تومان)</span>
            <input name="price" value={form.price} onChange={handleChange} type="number" className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">درصد تخفیف</span>
            <input name="discountPercent" value={form.discountPercent} onChange={handleChange} type="number" className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">پایان تخفیف (تاریخ)</span>
            <input name="discountEnd" value={form.discountEnd} onChange={handleChange} type="date" className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">دسته‌بندی</span>
            <input name="category" value={form.category} onChange={handleChange} className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col md:col-span-2">
            <span className="text-sm">توضیحات</span>
            <textarea name="description" value={form.description} onChange={handleChange} rows={3} className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">وزن (مثال: 210 گرم)</span>
            <input name="weight" value={form.weight} onChange={handleChange} className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">ابعاد (مثال: 21x29 سانتی‌متر)</span>
            <input name="dimensions" value={form.dimensions} onChange={handleChange} className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">جنس</span>
            <input name="material" value={form.material} onChange={handleChange} className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">تعداد برگ</span>
            <input name="pages" value={form.pages} onChange={handleChange} className="mt-1 p-2 border rounded" />
          </label>

          <label className="flex flex-col md:col-span-2">
            <span className="text-sm">colorQuantities (JSON)</span>
            <input name="colorQuantitiesJson" value={form.colorQuantitiesJson} onChange={handleChange} className="mt-1 p-2 border rounded" />
            <small className="text-xs text-gray-500">مثال: {`{ "صورتی": 10, "بنفش": 5 }`}</small>
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">ایجاد خروجی</button>
          <button type="button" onClick={() => setForm({
            name: "",
            slug: "",
            images: "",
            colors: "",
            price: "",
            discountPercent: "",
            discountEnd: "",
            category: "",
            description: "",
            weight: "",
            dimensions: "",
            material: "",
            pages: "",
            colorQuantitiesJson: "{}",
          })} className="px-3 py-2 border rounded">ریست</button>
        </div>

        {result && (
          <div className="bg-gray-50 border p-4 rounded mt-4">
            <h3 className="font-medium">خروجی:</h3>
            <pre className="mt-2 text-xs overflow-x-auto">{JSON.stringify(result, null, 2)}</pre>
            <p className="text-sm mt-2 text-gray-600">خروجی هم در حافظه کلیپ‌بورد کپی شده (در صورت پشتیبانی مرورگر).</p>
          </div>
        )}
      </form>
    </div>
  );
}
