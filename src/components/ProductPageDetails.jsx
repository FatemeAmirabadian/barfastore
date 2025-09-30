import { getProductBySlug } from "../../lib/helpers";
import { getDiscountedPrice } from "../../lib/helpers";

export default async function ProductDetailPage({ params }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  const imageUrl =
    product.images?.[0]?.url || "https://via.placeholder.com/150";
  if (!product) {
    return <p className="text-center mt-10">محصول یافت نشد</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* تصویر */}
        <img
          src={imageUrl || "/placeholder.png"}
          alt={product.name}
          className="w-full h-40 object-cover"
        />

        {/* جزئیات */}
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-gray-600 mb-4">{product.category.name}</p>
          <div className="min-h-[48px] flex flex-col justify-center items-center mb-2">
            {product.discountPercent > 0 &&
            new Date(product.discountEnd) >= new Date() ? (
              <>
                <span className="text-gray-400 line-through text-sm">
                  {product.price} تومان
                </span>
                <span className="text-red-600 font-bold text-lg">
                  {getDiscountedPrice(product.price, product.discountPercent)}{" "}
                  تومان
                </span>
              </>
            ) : (
              <span className="text-purple-700 font-semibold">
                {product.price} تومان
              </span>
            )}
          </div>

          <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
