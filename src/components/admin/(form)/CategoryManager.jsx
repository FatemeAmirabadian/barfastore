"use client";
import { useEffect, useState } from "react";
import { getCategories } from "../../../../lib/helpers";
const CategoryManager = ({ value = "", onChange, name = "category" }) => {
  const [categories, setCategories] = useState([]);
  const handleChange = (e) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: e.target.value,
        },
      });
    }
  };
  

  useEffect(() => {
    async function fetchCategories() {
      const categories = await getCategories();
      setCategories(categories);
    }
    fetchCategories();
  }, []);

  return (
    <label className="flex flex-col">
      <span className="text-sm">دسته‌بندی</span>
      <select
  value={value || ""}
  onChange={handleChange}
  className="mt-1 p-2 border rounded"
>
  <option value="">انتخاب دسته‌بندی</option>
  {categories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  ))}
</select>

    </label>
  );
};

export default CategoryManager;
