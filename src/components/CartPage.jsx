"use client";
import { useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "دفترچه یادداشت",
      price: 120000,
      quantity: 2,
      image: "/notebook-category.webp",
    },
    {
      id: 2,
      name: "مداد رنگی",
      price: 80000,
      quantity: 1,
      image: "/painting-category.webp",
    },
  ]);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-700 text-center">
        سبد خرید شما
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">سبد خرید شما خالی است.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-lg p-4 shadow-sm bg-purple-50"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold text-purple-800">{item.name}</h2>
                  <p className="text-gray-600">
                    قیمت: {item.price.toLocaleString()} تومان
                  </p>
                  <p className="text-gray-600">تعداد: {item.quantity}</p>
                </div>
              </div>
              <div className="font-bold text-purple-700">
                {(item.price * item.quantity).toLocaleString()} تومان
              </div>
            </div>
          ))}

          <div className="flex justify-end mt-6 p-4 bg-purple-100 rounded-lg font-bold text-purple-800">
            جمع کل: {totalPrice.toLocaleString()} تومان
          </div>

          <button className="w-full py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition">
            پرداخت
          </button>
        </div>
      )}
    </div>
  );
}
