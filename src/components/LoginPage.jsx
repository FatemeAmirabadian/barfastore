"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/userInform"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white shadow-lg rounded-2xl w-[90%] max-w-sm p-6 text-center">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/images/icons/logo.svg"
            alt="لوگو"
            width={50}
            height={50}
          />
          <h1 className="text-xl font-bold text-gray-700">برفااستور</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-right">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              شماره تلفن
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="شماره تلفن خود را وارد کنید"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-all"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}
