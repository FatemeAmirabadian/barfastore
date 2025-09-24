"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SlHome,
  SlUser,
  SlBasket,
  SlMagnifier,
  SlFolder,
} from "react-icons/sl";
import CategoriesModal from "../elements/CategoriesModal";
import SearchModal from "../elements/SearchModal";

const MobileNavigationBar = () => {
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState(null); // 'search' | 'categories' | null

  const navItems = [
    { id: "profile", label: "پروفایل", icon: <SlUser />, path: "/login" },
    { id: "cart", label: "سبد خرید", icon: <SlBasket />, path: "/cart" },
    { id: "search", label: "جستجو", icon: <SlMagnifier /> },
    { id: "categories", label: "دسته بندی", icon: <SlFolder /> },
    { id: "home", label: "خانه", icon: <SlHome />, path: "/" },
  ];

  return (
    <>
      {/* نوار پایین */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-2 flex justify-around md:hidden shadow-t border-t z-50">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          if (item.id === "search" || item.id === "categories") {
            return (
              <button
                key={item.id}
                onClick={() => setOpenModal(item.id)}
                className="flex flex-col items-center text-sm"
              >
                <span
                  className={`text-xl ${
                    isActive ? "text-purple-600" : "text-gray-500"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`${
                    isActive ? "text-purple-600" : "text-gray-500"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          }
          return (
            <Link
              key={item.id}
              href={item.path}
              className="flex flex-col items-center text-sm"
            >
              <span
                className={`text-xl ${
                  isActive ? "text-purple-600" : "text-gray-500"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`${isActive ? "text-purple-600" : "text-gray-500"}`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* مدال */}
      <CategoriesModal
        isOpen={openModal === "categories"}
        onClose={() => setOpenModal(null)}
      />
      <SearchModal
        isOpen={openModal === "search"}
        onClose={() => setOpenModal(null)}
      />
    </>
  );
};

export default MobileNavigationBar;
