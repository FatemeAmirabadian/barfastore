"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CategoryForm({ mode, initialData = null }) {
  const router = useRouter();
  const initialForm = {
    name: "",
    slug: "",
    image: "",
    url: "",
  };
  const [form, setForm] = useState(initialData || initialForm);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialForm,
        ...initialData,
      });
    }
  }, [initialData]);

  // 🔹 تبدیل فایل به رشته Base64
  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  async function handleChange(e) {
    const { name, value, files } = e.target;

    // اگر ورودی فایل بود
    if (name === "image" && files && files[0]) {
      try {
        const base64String = await fileToBase64(files[0]);
        setForm((prev) => ({ ...prev, image: base64String }));
      } catch (err) {
        console.error("Error converting file to Base64:", err);
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const category = {
      id:form?.id,
      name: form?.name,
      slug: form?.slug,
      image: form?.image,
      url: form?.url,
    };

    try {
      let response;
      if (mode === "create") {
        response = await fetch("/api/categories", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(category),
        });
      } else if (mode === "edit") {
        response = await fetch("/api/categories", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(category),
        });
      }

      const result = await response.json();

      if (result.success) {
        alert(
          `✅ دسته بندی با موفقیت ${mode === "edit" ? "ویرایش" : "افزوده"} شد`
        );
        // ریست فرم
        setForm(initialData || initialForm);
        router.push("/admin/categories");
      } else {
        alert("❌ خطا در اضافه کردن دسته بندی");
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
          {mode === "edit" ? "ویرایش دسته بندی" : "افزودن دسته بندی"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-sm">نام دسته بندی</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 p-2 border rounded"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">آدرس slug</span>
            <input
              name="slug"
              value={form.slug}
              onChange={handleChange}
              className="mt-1 p-2 border rounded"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">آدرس url</span>
            <input
              name="url"
              value={form.url}
              onChange={handleChange}
              className="mt-1 p-2 border rounded"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm">آدرس عکس</span>
            <input
              type="file"
              name="image"
              // value={form.image}
              onChange={handleChange}
              className="mt-2 p-3 border-2 border-dashed rounded-lg"
            />
          </label>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className={`px-2 py-1 text-white rounded ${
              loading ? "bg-gray-400" : "bg-blue-600"
            }`}
          >
            {loading
              ? "در حال ذخیره..."
              : mode === "edit"
              ? "ذخیره تغییرات"
              : "افزودن دسته بندی"}
          </button>
          <button
            type="button"
            onClick={() => setForm(initialData || initialForm)}
            className="px-3 py-2 border rounded"
          >
            ریست
          </button>
          <button
            type="button"
            onClick={() => setForm(initialData || initialForm)}
            className="px-3 py-2 border rounded"
          >
            <Link href={"/admin/categories"}>بازگشت</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
