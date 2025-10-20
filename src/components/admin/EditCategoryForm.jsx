import React from "react";
import { getCategories } from "../../../lib/helpers";
import CategoryForm from "./CategoryForm";

const EditCategoryForm = async ({ params }) => {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug); // دیکد کردن اسلاگ
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === decodedSlug); // جستجو با اسلاگ دیکد شده

  return <CategoryForm mode="edit" initialData={category} />;
};

export default EditCategoryForm;
