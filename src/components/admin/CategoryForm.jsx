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
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialForm,
        ...initialData,
      });
    }
  }, [initialData]);

  async function handleChange(e) {
    const { name, files, value } = e.target;
  
    if (name === "image" && files && files[0]) {
      setUploading(true); // شروع آپلود
      const formData = new FormData();
      formData.append("file", files[0]);
  
      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data.success) {
          setForm((prev) => ({ ...prev, image: data.url }));
        } else {
          alert("آپلود عکس موفقیت آمیز نبود");
        }
      } catch (err) {
        console.error("Upload error:", err);
      }finally {
        setUploading(false); // پایان آپلود
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }
  async function onSubmit(e) {
    e.preventDefault();
    if (uploading) {
      alert("لطفا صبر کنید تا آپلود عکس تمام شود");
      return;
    }
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
      setLoading(false);    }
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
            disabled={loading || uploading}
            className={`px-4 py-2 text-white rounded ${
              loading || uploading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
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
