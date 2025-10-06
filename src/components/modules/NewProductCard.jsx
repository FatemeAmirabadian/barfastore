"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPriceToFarsi, getDiscountedPrice } from "../../../lib/helpers";

export default function NewProductCard({ product }) {
  const hasDiscount =
    product.discountPercent > 0 &&
    (!product.discountEnd || new Date(product.discountEnd) >= new Date());

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="overflow-hidden hover:shadow-lg transition flex flex-col rounded-md h-[50vh] sm:h-[55vh] md:h-[60vh] flex-shrink-0 w-[180px] md:w-auto">
        {/* بلوک عکس */}
        <div className="relative w-full h-4/5">
          <Image
            src={product.images?.[0]?.url || "/placeholder.png"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 180px, 20vw"
            className="object-cover rounded-xl"
          />
          {hasDiscount && (
            <div className="absolute top-2 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-r-full flex flex-row-reverse items-center gap-1">
              <span>{formatPriceToFarsi(product.discountPercent)}</span>
              <span>درصد</span>
            </div>
          )}
        </div>

        {/* بلوک نوشته */}
        <div className="flex flex-col justify-between items-start p-1 text-right h-1/5">
          <h3 className="text-sm sm:text-md font-medium line-clamp-1">
            {product.name}
          </h3>

          {hasDiscount ? (
  <div className="flex items-center justify-start gap-3">
    {/* قیمت فعلی و تومان کنار هم بدون فاصله */}
    <span className="flex items-center gap-1 text-blue-500 font-semibold">
      <span>
        {formatPriceToFarsi(
          getDiscountedPrice(product.price, product.discountPercent)
        )}
      </span>
      <span>تومان</span>
    </span>

    {/* قیمت خط‌خورده با فاصله */}
    <span className="text-gray-400 font-semibold line-through text-sm">
      {formatPriceToFarsi(product.price)}
    </span>
  </div>
) : (
  <div className="flex flex-row items-center gap-1 text-blue-500 font-semibold">
    <span>{formatPriceToFarsi(product.price)}</span>
    <span>تومان</span>
  </div>
)}

        </div>
      </div>
    </Link>
  );
}
