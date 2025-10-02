"use client";
import SectionCard from "./modules/SectionCard";
import PublicLayout from "./layouts/PublicLayout";
import { formatPriceToFarsi } from "../../lib/helpers";
import CartProductCard from "./modules/CartProductCard";

export default function CartPage() {
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
          <CartProductCard/>

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
