"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import SectionCard from "./modules/SectionCard";
import PublicLayout from "./layouts/PublicLayout";
import { formatPriceToFarsi, getDiscountedPrice } from "../../lib/helpers";
import Image from "next/image";
import { SlTrash } from "react-icons/sl";

export default function CartPage({ products }) {
  const [cartItems, setCartItems] = useState(products);

  const updateQuantity = (index, delta) => {
    setCartItems((prev) => {
      const newCart = [...prev];
      newCart[index].quantity = Math.max(1, newCart[index].quantity + delta);
      return newCart;
    });
  };

  const removeItem = (index) => {
    setCartItems((prev) => {
      const newCart = [...prev];
      newCart.splice(index, 1);
      toast.success("محصول از سبد حذف شد", {
        style: { background: "green", color: "white", fontWeight: "bold" },
      });
      return newCart;
    });
  };

  const totalPrice = 1000;
  // cartItems.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0
  // );
  const shipping = 44000;
  const payable = totalPrice + shipping;

  return (
    <PublicLayout>
      <SectionCard>
        <div className="flex flex-col gap-6 md:flex-row-reverse">
          {/* ستون جزئیات محصولات */}
          <div className="bg-white w-full p-4 rounded-lg">
            {cartItems.map((product, index) => {
              const hasDiscount =
                product.discountPercent > 0 &&
                (!product.discountEnd ||
                  new Date(product.discountEnd) >= new Date());

              return (
                <div
                  key={index}
                  className="p-2 m-2 flex justify-between border-b border-gray-100"
                >
                  <div className="flex flex-col justify-between items-start">
                    <SlTrash
                      onClick={() => removeItem(index)}
                      className="cursor-pointer bg-red-200 px-2 rounded-md text-red-700 h-8 w-8"
                    />
                    {hasDiscount ? (
                      <div className="flex flex-col items-baseline gap-1">
                        <span className="text-gray-400 line-through text-xs">
                          {formatPriceToFarsi(product.price)}
                        </span>
                        <span className="text-purple-500 font-bold text-sm">
                          {formatPriceToFarsi(
                            getDiscountedPrice(
                              product.price,
                              product.discountPercent
                            )
                          )}تومان
                        </span>
                      </div>
                    ) : (
                      <span className="text-purple-500 font-semibold">
                        {formatPriceToFarsi(product.price)} تومان
                      </span>
                    )}
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-end gap-2 text-sm font-semibold p-2">
                      <div className="text-right">{product.name}</div>
                      <div className="text-gray-500 bg-gray-100 px-2 text-xs py-1 rounded">
                        {product.colors[0]}
                      </div>
                      {/* کنترل تعداد */}
                      <div className="border border-gray-200 p-1 rounded-md flex items-center gap-1">
                        <button
                          onClick={() => updateQuantity(index, 1)}
                          className="text-purple-500 rounded"
                        >
                          +
                        </button>
                        <span className="text-gray-500">{product.quantity}5</span>
                        <button
                          onClick={() => updateQuantity(index, -1)}
                          className="text-purple-500 rounded"
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <Image
                      src={product.images[0].url}
                      width={60}
                      height={60}
                      className="rounded-xl ml-3"
                      alt={product.name}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* فاکتور خرید */}
          <div className="bg-white w-full md:w-1/3 p-5 rounded-lg shadow h-fit text-right mb-5">
            <h2 className="text-xl font-semibold mb-3">فاکتور خرید</h2>
            <div className="p-3">
              <div className="flex justify-between">
                <span>{formatPriceToFarsi(totalPrice)} تومان</span>
                <span>جمع محصولات</span>
              </div>
              <div className="flex justify-between">
                <span>{formatPriceToFarsi(shipping)} تومان</span>
                <span>هزینه ارسال</span>
              </div>
              <div className="border-t border-gray-200 mt-10 flex justify-between font-bold text-purple-700">
                <span>{`تومان ${formatPriceToFarsi(payable)}`}</span>
                <span>مبلغ نهایی</span>
              </div>
            </div>
            <button className="bg-purple-500 w-full text-white rounded-xl p-2 m-3 mx-auto hover:bg-purple-600 transition">
              تکمیل خرید
            </button>
          </div>
        </div>
      </SectionCard>
    </PublicLayout>
  );
}
