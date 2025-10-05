"use client";
import Link from "next/link";
import MobileNavigationBar from "./MobileNavigationBar";
import { useCartStore } from "../../../store/cartStore";
import { SlBasket, SlUser } from "react-icons/sl";
import SearchBox from "../elements/Searchbox";

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
       <SearchBox/>
        <Link
          href="/login"
          className="bg-blue-600 hover:bg-blue-800 transition text-white flex justify-center items-center px-4 py-2 rounded-xl "
        >
          <span className="pr-1">حساب کاربری</span>
          <SlUser />
        </Link>
        <div className="bg-white  hover:bg-gray-100 transition border border-gray-200 flex justify-around items-center p-1 px-4 rounded-xl ">
          {totalQuantity > 0 ? (
            <span className="bg-gray-100 text-gray-800 rounded-full p-1 px-2">
              {totalQuantity}
            </span>
          ) : (
            <span className="bg-gray-100 text-gray-800 rounded-full text-xs p-1">
              0
            </span>
          )}
          <Link href="/cart" className="pr-1 pl-2">
            سبدخرید
          </Link>
          <SlBasket />
        </div>
      </div>
    </>
  );
};

export default Navigation;
