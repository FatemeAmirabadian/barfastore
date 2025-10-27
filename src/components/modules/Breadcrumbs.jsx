"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const translations = {
  products: "محصولات",
  cart: "سبد خرید",
  categories: "دسته بندی",
  ethod: "اتود",
  daftar: "دفتر",
  pen: "خودکار",
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathParts = pathname.split("/").filter((part) => part);

  if (pathParts.length === 0) return null;

  const breadcrumbs = pathParts.map((part, index) => {
    const href = "/" + pathParts.slice(0, index + 1).join("/");
    const isLast = index === pathParts.length - 1;

    const translated = translations[part] || part.replace(/-/g, " ");
    const label = decodeURIComponent(translated);

    return (
      <span key={href} className="flex items-center">
        {!isLast ? (
          <>
            <Link
              href={href}
              className="text-blue-600 hover:underline capitalize"
            >
              {label}
            </Link>
            <span className="mx-2 text-gray-400">›</span>
          </>
        ) : (
          <span className="text-gray-600 capitalize">{label}</span>
        )}
      </span>
    );
  });

  return (
    <nav
      className="mx-auto max-w-6xl text-sm md:text-lg text-gray-600 my-4 px-5 flex flex-wrap items-center"
      dir="rtl"
    >
      {breadcrumbs}
    </nav>
  );
}
