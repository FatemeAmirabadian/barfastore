"use client";

import Image from "next/image";
import { SlArrowLeft } from "react-icons/sl";

export default function ProfilePage() {
  const user = {
    name: "فاطمه امیر",
    wallet: 120000,
    profileImage: "/images/icons/logo.svg",
  };

  const menuItems = [
    { label: "اطلاعات کاربری" },
    { label: "سفارش‌ها" },
    { label: "موردعلاقه‌ها" },
    { label: "آدرس‌ها" },
    { label: "پشتیبانی" },
    { label: "خروج از حساب", isLogout: true },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 space-y-6">
      
      {/* کارت پروفایل */}
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6 flex flex-col items-center space-y-4">
        <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
          <Image
            src={user.profileImage}
            alt="Profile"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>

        {/* اسم و کیف پول */}
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-gray-500">موجودی کیف پول: {user.wallet.toLocaleString()} تومان</p>

        {/* دکمه افزایش اعتبار */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition">
          افزایش اعتبار
        </button>
      </div>

      {/* کارت‌های اطلاعات کاربری */}
      <div className="w-full max-w-md flex flex-col space-y-3">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg p-4 flex flex-row-reverse justify-between items-center cursor-pointer hover:bg-gray-50 transition ${
              item.isLogout ? "text-red-500" : ""
            }`}
          >
            <span>{item.label}</span>
            <span className="text-gray-400"><SlArrowLeft/></span>
          </div>
        ))}
      </div>
    </div>
  );
}
