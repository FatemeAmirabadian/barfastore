"use client";
import Link from "next/link";
import MobileNavigationBar from "./MobileNavigationBar";
import { useCartStore } from "../../../store/cartStore";
import { SlBasket } from "react-icons/sl";

const Navigation = () => {
  const { cart } = useCartStore();
  // 🛒 محاسبه تعداد کل آیتم‌های کارت
  const totalQuantity = cart.reduce((acc, product) => {
    return (
      acc +
      Object.values(product.colorQuantities || {}).reduce(
        (sum, qty) => sum + qty,
        0
      )
    );
  }, 0);

  return (
    <>
      {/* موبایل: navigation پایین صفحه */}
      <MobileNavigationBar />

      {/* دسکتاپ: navigation کنار لوگو */}
      <div className="hidden md:flex gap-6 items-center">
        <Link href="/">جستجو</Link>
        <Link href="/profile">حساب کاربری</Link>
        <div className="bg-white border border-gray-200 flex justify-around items-center px-4 py-2 rounded-xl ">
          {totalQuantity > 0 ? (
            <span className="bg-gray-100 text-gray-800 rounded-full text-xs px-2">
              {totalQuantity}
            </span>
          ) : (
            <span className="bg-gray-100 text-gray-800 rounded-full text-xs px-2">
              0
            </span>
          )}
          <Link href="/cart" className="px-2">
            سبدخرید
          </Link>
          <SlBasket />
        </div>
      </div>
    </>
  );
};

export default Navigation;
