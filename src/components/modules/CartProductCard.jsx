import React from "react";
import { useCartStore } from "../../../store/cartStore";
import { formatPriceToFarsi, getDiscountedPrice } from "../../../lib/helpers";
import Image from "next/image";

const CartProductCard = () => {
  const { cart, removeFromCart } = useCartStore();
  return (
    <div className="bg-white w-full p-4 rounded-lg">
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">سبد خرید شما خالی است</p>
      ) : (
        cart.map((product, index) => {
          const hasDiscount =
            product.discountPercent > 0 &&
            (!product.discountEnd ||
              new Date(product.discountEnd) >= new Date());

          console.log(cart);

          return (
            <div
              key={index}
              className="p-2 mb-2 flex justify-between items-center border-b border-gray-200 rounded-lg"
            >
              {/* سمت چپ: دکمه حذف کل محصول و قیمت */}
              <div className="flex flex-col justify-between gap-10">
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-red-600 bg-red-200 px-2 py-1 rounded-md mb-2"
                >
                  حذف
                </button>

                <div className="text-purple-600 font-semibold">
                  {hasDiscount && (
                    <div className="text-gray-400 line-through text-xs">
                      {formatPriceToFarsi(product.price)} تومان
                    </div>
                  )}
                  {hasDiscount
                    ? formatPriceToFarsi(
                        getDiscountedPrice(
                          product.price,
                          product.discountPercent
                        )
                      )
                    : formatPriceToFarsi(product.price)}
                  تومان
                </div>
              </div>

              {/* رنگ‌ها و تعداد */}
              <div className="flex gap-2 text-right">
                <div className="flex flex-col justify-between items-end">
                  <p>{product.name}</p>
                  {product.selectedColors.map((color, idx) => (
                    <div key={idx}>
                      <span>{product.colorQuantities[color]}</span>
                    </div>
                  ))}
                </div>
                {/* تصویر محصول */}
                <Image
                  src={product.images[0].url}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="rounded-md md:ml-4 mb-2 md:mb-0"
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CartProductCard;
