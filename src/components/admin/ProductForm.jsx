"use client";

import React, { useEffect, useState } from "react";
import { ColorManager } from "./(form)/ColorManager";
import CategoryManager from "./(form)/CategoryManager";
import { ColorQuantitiesManager } from "./(form)/ColorQuantitiesManager";
import { ImagesManager } from "./(form)/ImagesManager";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductForm({ mode, initialData = null }) {
  const router = useRouter();
  const initialForm = {
    name: "",
    slug: "",
    images: [],
    colors: [],
    quantities: 0,
    price: 0,
    discountPercent: "",
    discountEnd: "",
    category: "",
    description: "",
    weight: 0,
    dimensions: "",
    material: "",
    pages: "",
    colorQuantities: {},
  };
  const [form, setForm] = useState(initialData || initialForm);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialForm,
        ...initialData,
        ...(initialData.specs && {
          weight: initialData?.specs["وزن"] || "",
          dimensions: initialData?.specs["ابعاد"] || "",
          material: initialData?.specs["جنس"] || "",
          pages: initialData?.specs["تعداد_برگ"] || "",
        }),
      });
    }
  }, [initialData]);

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

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const product = {
      name: form?.name,
      slug: form?.slug,
      images: form?.images,
      colors: form?.colors,
      quantities: parseInt(form?.quantities) || 0,
      price: parseInt(form?.price) || 0,
      discountPercent: parseInt(form?.discountPercent) || 0,
      discountEnd: form?.discountEnd ? new Date(form.discountEnd).toISOString() : null,
      createdAt: new Date().toISOString(),
      category: form?.category,
      description: form?.description,
      specs: {
        وزن: parseInt(form?.weight) || null,
        ابعاد: form?.dimensions || null,
        جنس: form?.material || null,
        تعداد_برگ: parseInt(form?.pages) || null,
      },
      comments: [],
      colorQuantities: form.colorQuantities,
    };

    try {
      let response;
      if (mode === "create") {
        response = await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        });
      } else if (mode === "edit") {
        response = await fetch("/api/products", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        });
      }

      const result = await response.json();

      if (result.success) {
        alert(`✅ محصول با موفقیت ${mode === "edit" ? "ویرایش" : "افزوده"} شد`);
        // ریست فرم
        setForm(initialData || initialForm);
        router.push("/admin/products");
      } else {
        alert("❌ خطا در اضافه کردن محصول");
      }
    } catch (error) {
      alert("❌ خطا در ارسال درخواست");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-3xl bg-white shadow-md rounded-2xl p-6 space-y-6 text-right"
        dir="rtl"
      >
        <h2 className="text-2xl font-semibold text-center">
          {mode === "edit" ? "ویرایش محصول" : "افزودن محصول"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-sm">نام محصول</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 p-2 border rounded"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">آدرس url</span>
            <input
              name="slug"
              value={form.slug}
              onChange={handleChange}
              className="mt-1 p-2 border rounded"
              required
            />
          </label>

          <ImagesManager
            value={form.images}
            onChange={handleChange}
            name="images"
          />

          <ColorManager
            value={form.colors}
            onChange={handleChange}
            name="colors"
          />

          <label className="flex flex-col">
            <span className="text-sm">تعداد</span>
            <input
              name="quantities"
              value={form.quantities}
              onChange={handleChange}
              type="number"
              className="mt-1 p-2 border rounded"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">قیمت (تومان)</span>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              type="number"
              className="mt-1 p-2 border rounded"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">درصد تخفیف</span>
            <input
              name="discountPercent"
              value={form.discountPercent}
              onChange={handleChange}
              type="number"
              className="mt-1 p-2 border rounded"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">پایان تخفیف (تاریخ)</span>
            <input
              name="discountEnd"
              value={form?.discountEnd}
              onChange={handleChange}
              type="date"
              className="mt-1 p-2 border rounded"
            />
          </label>

          <CategoryManager
            value={form?.category}
            onChange={handleChange}
            name="category"
          />

          <label className="flex flex-col">
            <span className="text-sm">وزن (مثال: 210 گرم)</span>
            <input
              name="weight"
              value={form?.weight}
              onChange={handleChange}
              className="mt-1 p-2 border rounded"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">ابعاد (مثال: 21x29 سانتی‌متر)</span>
            <input
              name="dimensions"
              value={form?.dimensions}
              onChange={handleChange}
              className="mt-1 p-2 border rounded"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">جنس</span>
            <input
              name="material"
              value={form?.material}
              onChange={handleChange}
              className="mt-1 p-2 border rounded"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">تعداد برگ</span>
            <input
              name="pages"
              value={form?.pages}
              onChange={handleChange}
              className="mt-1 p-2 border rounded"
            />
          </label>

          <ColorQuantitiesManager
            colors={form?.colors}
            value={form.colorQuantities}
            onChange={handleChange}
            name="colorQuantities"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 text-white rounded ${
              loading ? "bg-gray-400" : "bg-blue-600"
            }`}
          >
            {loading
              ? "در حال ذخیره..."
              : mode === "edit"
              ? "ذخیره تغییرات"
              : "افزودن محصول"}
          </button>
          <button
            type="button"
            onClick={() => setForm(initialData||initialForm)}
            className="px-3 py-2 border rounded"
          >
            ریست
          </button>
          <button
            type="button"
            onClick={() => setForm(initialData||initialForm)}
            className="px-3 py-2 border rounded"
          >
            <Link href={"/admin/products"}>بازگشت</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
