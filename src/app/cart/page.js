import CartPage from "@/components/CartPage";
import React from "react";
import {products } from "../../../data/products";

const page = () => {
  const cartProducts = products
  return (
    <div>
      <CartPage products={cartProducts}/>
    </div>
  );
};

export default page;
