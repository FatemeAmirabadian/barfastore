"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FailAlrt } from "../elements/Alerts";

export default function UserInfoForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      FailAlrt("رمز عبور و تکرار آن یکسان نیست");
      return;
    }

    console.log("User Info Submitted:", formData);
    router.push("/profile");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[85vw] max-w-sm text-center">
        {/* لوگو و عنوان */}
        <div className="flex flex-col mb-5">
          <Image
            src="/images/icons/logo.svg"
            alt="Site Logo"
            width={60}
            height={60}
          />
          <h1 className="text-md mt-2 text-right">مشخصات خود را کامل کنید</h1>
        </div>

        {/* فرم اطلاعات */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="نام"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="lastName"
            placeholder="نام خانوادگی"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            value={formData.password}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="تکرار رمز عبور"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-2 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition"
          >
            ثبت اطلاعات
          </button>
        </form>
      </div>
    </div>
  );
}
