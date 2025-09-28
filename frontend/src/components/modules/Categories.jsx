const categories = [
  { name: "خودکار", image: "/pen-category.webp" },
  { name: "دفتر و کاغذ", image: "/paper-category.jpg" },
  { name: "قیچی و ابزار برش", image: "/scissor-category.jpg" },
  { name: "نقاشی و رنگ‌آمیزی", image: "/painting-category.webp" },
  { name: "خط‌کش و ابزار اندازه‌گیری", image: "/ruler-category.webp" },
  { name: "قلمو و ابزار هنری", image: "/paint-brushes-category.webp" },
  { name: "مداد و تراش", image: "/pencil-sharpener-category.jpg" },
  { name: "دفترچه یادداشت", image: "/notebook-category.webp" },
];

export default function Categories() {
  return (
    <div className="grid grid-cols-4 gap-6 px-2">
      {categories.map((cat) => (
        <div key={cat.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg flex flex-col">
          <div className="w-full aspect-[3/4]">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-center sr-only">{cat.name}</h3>
        </div>
      ))}
    </div>
  );
}
