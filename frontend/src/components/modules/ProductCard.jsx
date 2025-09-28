import Link from "next/link";
import { getDiscountedPrice } from "../../../lib/getDiscountedPrice";

export default function ProductCard({ product }) {
  const imageUrl = product.image?.[0]?.url || "https://via.placeholder.com/150";
  const hasDiscount = product.discountPercent > 0 && new Date(product.discountEndDate) >= new Date();

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition relative">
        {/* تصویر */}
        <img
          src={imageUrl.startsWith("http") ? imageUrl : `http://localhost:1337${imageUrl}`}
          alt={product.name}
          className="w-full h-40 object-cover"
        />

        {/* بج درصد تخفیف */}
        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            %{product.discountPercent}
          </div>
        )}

        {/* قیمت */}
        <div className="min-h-[48px] flex flex-col justify-center items-center mb-2 mt-2">
          {hasDiscount ? (
            <>
              <span className="text-gray-400 line-through text-sm">{product.price} تومان</span>
              <span className="text-red-600 font-bold text-lg">{getDiscountedPrice(product)} تومان</span>
            </>
          ) : (
            <span className="text-purple-700 font-semibold">{product.price} تومان</span>
          )}
        </div>
      </div>
    </Link>
  );
}
