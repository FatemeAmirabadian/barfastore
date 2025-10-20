import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-5">
      <div className="bg-white text-center p-1 mb-2 rounded-md">
        <Link href={"/admin/products"}>see products list</Link>
      </div>
      <div className="bg-white text-center p-1 rounded-md">
        <Link href={"/admin/categories"}>see categories list</Link>
      </div>
    </div>
  );
};

export default page;
