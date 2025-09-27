import { getProducts } from "../../lib/api";

export default async function ProductsPage() {
  const products = (await getProducts()) || [];
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">محصولات</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => {
          const imageUrl =
            product.image?.[0]?.url || "https://via.placeholder.com/150";

          return (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={
                  imageUrl.startsWith("http")
                    ? imageUrl
                    : `http://localhost:1337${imageUrl}`
                }
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-sm font-medium mb-2">{product.name}</h3>
                <span className="text-purple-700 font-semibold mb-2">
                  {product.price} تومان
                </span>
                <p className="text-xs text-gray-500 mb-2">
                  {product.description}
                </p>
                <button className="bg-purple-500 text-white px-4 py-1 rounded hover:bg-purple-600 transition">
                  افزودن به سبد
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
