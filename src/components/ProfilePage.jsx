"use client";
import { useState } from "react";

export default function ProfilePage() {
  // داده نمونه کاربر
  const [user, setUser] = useState({
    name: "فاطمه امیر",
    email: "fateme@example.com",
    avatar: "/20250315_123411.jpg", // عکس پروفایل نمونه
  });

  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md flex flex-col items-center">
        {/* عکس پروفایل */}
        <img
          src={user.avatar}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-purple-300"
        />
        {/* نام */}
        <h1 className="text-2xl font-bold text-purple-800">{user.name}</h1>
        {/* ایمیل */}
        <p className="text-gray-600 mb-6">{user.email}</p>

        {/* دکمه ویرایش */}
        <button className="bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-800 transition">
          ویرایش پروفایل
        </button>
      </div>
    </div>
  );
}
