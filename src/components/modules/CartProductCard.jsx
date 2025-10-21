"use client";
import React, { useEffect, useState } from "react";
import { useCartStore } from "../../../store/cartStore";
import { getProducts } from "../../../lib/helpers";
import { formatPriceToFarsi, getDiscountedPrice } from "../../../lib/utils";
import Image from "next/image";
import QuantitySelector from "../elements/QuantitySelector";
import { SlTrash } from "react-icons/sl";
import Link from "next/link";

function CartProductCard() {
  const { cart, updateColorQuantity, removeColorFromCart } = useCartStore();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  const handleIncrease = (productId, color) => {
    const product = cart.find((p) => p.productId === productId);
    if (product) {
      updateColorQuantity(productId, color, product.colorQuantities[color] + 1);
    }
  };

  const handleDecrease = (productId, color) => {
    const product = cart.find((p) => p.productId === productId);
    if (product) {
      updateColorQuantity(productId, color, product.colorQuantities[color] - 1);
    }
  };

  if (!products.length) return <p>در حال بارگذاری محصولات...</p>;

  return (
    <div className="bg-white w-full p-4 rounded-lg">
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">سبد خرید شما خالی است</p>
      ) : (
        cart
          .flatMap((product) =>
            Object.entries(product.colorQuantities).map(([color, qty]) => ({
              productId: product.productId,
              name: product.name,
              image: product.images?.[0]?.url || "",
              color,
              qty,
              price: product.price,
            }))
          )
          .map((product, index) => {
            const productData = products.find(
              (p) => p.id === product.productId
            );
            if (!productData) return null;

            const hasDiscount = productData.discountPercent > 0;
            const productSlug = productData.slug;

            return (
              <div
                key={index}
                className="p-2 mb-2 flex justify-between items-center border-b border-gray-200 rounded-lg"
              >
                <div className="flex flex-col justify-between gap-10">
                  <button
                    onClick={() =>
                      removeColorFromCart(product.productId, product.color)
                    }
                    className="text-red-500 bg-red-200 p-1 rounded-md mb-2 flex justify-center items-center w-10 md:15"
                  >
                    <SlTrash />
                  </button>
                  {hasDiscount ? (
                    <div className="flex flex-col-reverse justify-between">
                      <span className="flex flex-row-reverse gap-1 text-blue-500 font-semibold">
                        <span>
                          {formatPriceToFarsi(
                            getDiscountedPrice(
                              productData.price,
                              productData.discountPercent
                            )
                          )}
                        </span>
                        <span>تومان</span>
                      </span>
                      <span className="block text-gray-400 font-semibold line-through text-xs sm:tex-sm mr-4">
                        {formatPriceToFarsi(productData.price)}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-row-reverse text-blue-600 font-semibold">
                      {formatPriceToFarsi(product.price)}
                      <span className="px-1"> تومان</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 text-right">
                  <div className="flex flex-col justify-start items-end text-sm">
                    <Link href={`/products/${productSlug}`}>
                      <p className="text-xs sm:text-base font-semibold mb-2">
                        {product.name}
                      </p>
                    </Link>
                    <div className="flex flex-row-reverse items-center gap-2">
                      <span className="text-xs bg-gray-200 rounded-md p-2 text-center w-15 md:w-20">
                        {product.color}
                      </span>
                      <QuantitySelector
                        quantity={product.qty}
                        onIncrease={() =>
                          handleIncrease(product.productId, product.color)
                        }
                        onDecrease={() =>
                          handleDecrease(product.productId, product.color)
                        }
                      />
                    </div>
                  </div>
                  {product.image && (
                    <Link href={`/products/${productSlug}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={50}
                        height={50}
                        className="rounded-md md:ml-4 mb-2 md:mb-0"
                      />
                    </Link>
                  )}
                </div>
              </div>
            );
          })
      )}
    </div>
  );
}

export default CartProductCard;
