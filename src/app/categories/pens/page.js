import ProductCard from "@/components/modules/ProductCard";

const paintingProducts = [
  {
    id: 1,
    name: "رنگ آبرنگ ۱۲ رنگ",
    slug: "p-1",
    price: 120000,
    images: [
      { url:  "/20250415_135558.jpg", },
      { url: "/20250312_140203.jpg" },
    ],
    discountPercent: 10,
    discountEnd: "2025-10-10",
    createdAt: "2025-09-29T20:00:00Z",
  },
];

export default function page() {
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-center">نقاشی و رنگ‌آمیزی</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {paintingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
