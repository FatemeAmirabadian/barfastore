import SectionHeader from "./SectionHeader";

const articles = [
  {
    id: 1,
    title: "ایده‌های خلاقانه برای دفترچه‌های پاییزی",
    excerpt:
      "چطور دفترچه‌ها و لوازم تحریر پاییزی خود را به شکل خلاقانه استفاده کنیم...",
    image: "/20250312_135123.jpg",
    slug: "creative-fall-notebooks",
  },
  {
    id: 2,
    title: "نحوه انتخاب خودکار مناسب",
    excerpt: "در این مقاله راهنمای انتخاب خودکار مناسب برای مدرسه و محل کار...",
    image: "/20250312_140203.jpg",
    slug: "pen-buying-guide",
  },
  {
    id: 3,
    title: "ترندهای لوازم تحریر سال 2025",
    excerpt: "جدیدترین ترندها و سبک‌ها در دنیای لوازم تحریر...",
    image: "/20250315_123411.jpg",
    slug: "stationery-trends-2025",
  },
];

export default function Articles() {
  return (
    <>
      {" "}
      <SectionHeader title="جدیدترین مقالات" linkHref="/blogs" />
      <div className="overflow-x-auto flex gap-4 p-2 flex-row-reverse scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-100 mb-15 md:mb-2">
        {articles.map((post) => (
          <div
            key={post.title}
            className="flex-shrink-0 w-56 h-64 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-3 flex-1 flex items-center justify-center text-center">
              <span className="text-sm font-medium">{post.title}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
