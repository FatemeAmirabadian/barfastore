import Link from "next/link";
import { categories } from "../../data/categories";

export default function Categories() {
  return (
    <div className="grid grid-cols-4 gap-6 px-2">
      {categories.map((cat) => (
        <Link key={cat.name} href={cat.url}>
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg flex flex-col h-full p-1">
            <div className="w-full aspect-[3/4]">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-center text-xs sm:text-sm mt-auto py-2">
              {cat.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function CategoriesSlice() {
  return (
    <div className="grid grid-cols-4 gap-6 px-2">
      {categories.slice(0, 8).map((cat) => (
        <Link key={cat.name} href={cat.url}>
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg flex flex-col h-full">
            <div className="w-full aspect-[3/4]">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-center text-xs sm:text-sm mt-auto py-2">
              {cat.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
