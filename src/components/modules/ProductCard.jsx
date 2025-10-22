import Link from "next/link";
import { formatPriceToFarsi, getDiscountedPrice } from "../../../lib/utils";

export default function ProductCard({ product }) {
  const hasDiscount =
    product.discountPercent > 0 &&
    (!product.discountEnd || new Date(product.discountEnd) >= new Date());

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="overflow-hidden hover:shadow-lg transition flex flex-col rounded-md h-[50vh] sm:h-[55vh] md:h-[60vh]">
        {/* بلوک عکس - 90٪ کارت */}
        <div className="relative w-full h-4/5">
          <img
            src={product.images[0]?.url}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl"
          />
          {/* بج درصد تخفیف */}
          {hasDiscount && (
            <div className="absolute top-2 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-r-full flex flex-row-reverse items-center gap-1">
              <span>{formatPriceToFarsi(product.discountPercent)}</span>
              <span>درصد</span>
            </div>
          )}
        </div>

        {/* بلوک نوشته - 10٪ پایین کارت */}
        <div className="flex flex-col justify-start items-end p-1 text-center h-1/5">
          <h3 className="text-xs sm:text-sm text-right font-medium line-clamp-1">
            {product.name}
          </h3>
          {hasDiscount ? (
            <div className="flex flex-row-reverse justify-between items-center">
              <span className="text-blue-500 font-semibold">
                {formatPriceToFarsi(
                  getDiscountedPrice(product.price, product.discountPercent)
                )}
              </span>
              <span className="text-blue-500  font-semibold pr-1"> تومان</span>
              <span className="block text-gray-400 font-semibold line-through text-md sm:tex-lg mr-4">
                {formatPriceToFarsi(product.price)}
              </span>
            </div>
          ) : (
            <span className=" flex flex-row justify-between items-center text-blue-500 font-semibold">
              <span className="pr-1"> تومان</span>
              {formatPriceToFarsi(product.price)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
