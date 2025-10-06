import Categories from "@/components/CategoriesPage";

const page = () => {
  return (
    <div className="max-w-5xl mx-auto my-10 px-1">
      <p className="text-center mb-10 text-2xl fonte-semibold">دسته بندی ها</p>
      <Categories />
    </div>
  );
};

export default page;
