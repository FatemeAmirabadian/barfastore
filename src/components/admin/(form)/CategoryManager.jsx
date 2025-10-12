import { categories } from "../../../../data/categories";

const CategoryManager = ({ value = "", onChange, name = "category" }) => {
  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    if (onChange) {
      onChange({
        target: {
          name: name,
          value: selectedCategory
        }
      });
    }
  };

  return (
    <label className="flex flex-col">
      <span className="text-sm">دسته‌بندی</span>
      <select 
        value={value} 
        onChange={handleChange} 
        className="mt-1 p-2 border rounded"
      >
        <option value="">انتخاب دسته‌بندی</option>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default CategoryManager;