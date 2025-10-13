import CartPage from "@/components/CartPage";
import React from "react";
import { getProducts } from "../../../lib/helpers";

export default async function page() {
  const cartProducts = await getProducts();
  return (
    <div>
      <CartPage products={cartProducts} />
    </div>
  );
}
