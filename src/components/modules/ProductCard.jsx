import Link from "next/link";
import { getDiscountedPrice } from "../../../lib/helpers";
import Image from "next/image";

export default function ProductCard({ product }) {
  const imageUrl =
    product.images?.[0]?.url || "https://via.placeholder.com/150";

  const hasDiscount =
    product.discountPercent > 0 &&
    (!product.discountEnd || new Date(product.discountEnd) >= new Date());

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="overflow-hidden hover:shadow-lg transition flex flex-col h-[70vh]">
        
        {/* بلوک عکس - 90٪ کارت */}
        <div className="relative w-full h-[calc(80/100*100vh)]">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover rounded-xl"
          />

          {/* بج درصد تخفیف */}
          {hasDiscount && (
            <div className="absolute top-2 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-r-full">
              {product.discountPercent} درصد
            </div>
          )}
        </div>

        {/* بلوک نوشته - 10٪ پایین کارت */}
        <div className="flex flex-row justify-between items-center p-1 text-center h-[calc(20/100*100vh)]">
          <h3 className="text-sm sm:text-md font-medium line-clamp-1">{product.name}</h3>
          {hasDiscount ? (
            <div className="grid grid-cols">
              <span className="block text-gray-400 line-through text-xs sm:tex-sm">
                {product.price}
              </span>
              <span className="text-purple-500 font-bold text-sm sm:tex-md">
                {getDiscountedPrice(product.price, product.discountPercent)}
              </span>
              <span className="text-gray-400 text-xs sm:tex-sm"> تومان
              </span>
            </div>
          ) : (
            <span className="text-purple-700 font-semibold">
              {product.price} تومان
            </span>
          )}
        </div>

      </div>
    </Link>
  );
}
