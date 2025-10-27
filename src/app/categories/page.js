import CategoriesPage from "@/components/CategoriesPage";
import PublicLayout from "@/components/layouts/PublicLayout";

const page = () => {
  return (
    <PublicLayout>
      <div className="max-w-5xl mx-auto my-10 px-1">
        <p className="text-center mb-10 text-2xl fonte-semibold">
          دسته بندی ها
        </p>
        <CategoriesPage />
      </div>
    </PublicLayout>
  );
};

export default page;
