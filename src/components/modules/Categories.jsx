import Link from "next/link";

const categories = [
  { name: "خودکار", image: "/pen-category.webp", url: "categories/pens" },
  { name: "کاغذ", image: "/paper-category.jpg", url: "categories/pens" },
  { name: "قیچی", image: "/scissor-category.jpg", url: "categories/pens" },
  { name: "نقاشی", image: "/painting-category.webp", url: "categories/pens" },
  { name: "خط‌کش", image: "/ruler-category.webp", url: "categories/pens" },
  {
    name: "ابزار هنری",
    image: "/paint-brushes-category.webp",
    url: "categories/pens",
  },
  {
    name: "تراش",
    image: "/pencil-sharpener-category.jpg",
    url: "categories/pens",
  },
  {
    name: "دفترچه یادداشت",
    image: "/notebook-category.webp",
    url: "categories/pens",
  },
];

export default function Categories() {
  return (
    <div className="grid grid-cols-4 gap-6 px-2">
      {categories.map((cat) => (
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
