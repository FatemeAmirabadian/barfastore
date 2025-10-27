import React from "react";
import { getDiscountedProducts } from "../../../lib/helpers";
import Link from "next/link";

const DiscountsListPage = async () => {
  const discountedProducts = await getDiscountedProducts();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-5 text-center">لیست تخفیف ها</h1>
      <div className="text-xl font-bold mb-5 text-right">
        <Link
          href={"/admin/products/addProduct"}
          className="bg-blue-300 hover:bg-blue-500 transition text-white px-2 py-1 rounded-md"
        >
          افزودن تخفیف +
        </Link>
        <Link
          href={"/admin/products"}
          className="bg-purple-300 hover:bg-purple-500 transition text-white px-2 py-1 mr-5 rounded-md"
        >
          فروشگاه
        </Link>
      </div>
      <div className="flex flex-col-reverse gap-6">
        {discountedProducts.map((p, index) => (
          <div key={index} className="flex bg-white p-2 border justify-between">
            <div className="border">{p.discountPercent}%</div>
            <div className="border">{p.name}</div>
            <Link href={`/admin/products/${p.slug}`}>ویرایش تخفیف</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountsListPage;
