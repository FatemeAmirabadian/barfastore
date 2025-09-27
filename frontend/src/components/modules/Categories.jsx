const categories = [
  { name: "خودکار", icon: "🖊️" },
  { name: "دفتر و کاغذ", icon: "📒" },
  { name: "قیچی و ابزار برش", icon: "✂️" },
  { name: "نقاشی و رنگ‌آمیزی", icon: "🎨" },
  { name: "خط‌کش و ابزار اندازه‌گیری", icon: "📏" },
  { name: "قلمو و ابزار هنری", icon: "🖌️" },
  { name: "مداد و تراش", icon: "✏️" },
  { name: "دفترچه یادداشت", icon: "📓" },
  { name: "ماژیک و هایلایتر", icon: "🖍️" },
  { name: "لوازم اداری", icon: "📎" },
  { name: "پاک‌کن و مداد پاک‌کن", icon: "🩹" },
  { name: "ست هدیه", icon: "🎁" },
];
export default function Categories() {
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">دسته‌بندی محصولات</h2>
      
      <div className="flex gap-6 overflow-x-auto py-4 flex-row-reverse scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-100">
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center min-w-max">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-100 text-2xl hover:bg-purple-200 cursor-pointer transition">
              {cat.icon}
            </div>
            <span className="mt-2 text-sm font-medium">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
