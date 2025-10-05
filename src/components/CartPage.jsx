"use client";
import SectionCard from "./modules/SectionCard";
import PublicLayout from "./layouts/PublicLayout";
import { formatPriceToFarsi } from "../../lib/helpers";
import CartProductCard from "./modules/CartProductCard";
import { useCartStore } from "../../store/cartStore";

export default function CartPage() {
  const { cart } = useCartStore();
  const totalPrice = cart.reduce((sum, product) => {
    const productTotal = Object.values(product.colorQuantities).reduce(
      (qtySum, qty) => qtySum + qty * product.price,
      0
    );
    return sum + productTotal;
  }, 0);

  const shipping = 70000;
  const payable = totalPrice + shipping;

  return (
    <PublicLayout>
      <SectionCard>
        <div className="flex flex-col gap-6 md:flex-row-reverse">
          {/* ستون جزئیات محصولات */}
          <CartProductCard />

          {/* فاکتور خرید */}
          <div className="bg-white w-full md:w-1/3 p-5 rounded-lg shadow h-fit text-right mb-5">
            <h2 className="text-xl font-semibold mb-3">فاکتور خرید</h2>
            <div className="p-3">
              <div className="flex justify-between">
                <span className="flex flex-row-reverse">
                  {formatPriceToFarsi(totalPrice)}{" "}
                  <span className="px-1">تومان</span>
                </span>
                <span>جمع محصولات</span>
              </div>
              <div className="flex justify-between">
                {" "}
                <span className="flex flex-row-reverse">
                  {formatPriceToFarsi(shipping)}{" "}
                  <span className="px-1">تومان</span>
                </span>
                <span>هزینه ارسال</span>
              </div>
              <div className="border-t border-gray-200 mt-10 flex justify-between font-bold text-blue-700">
                <span className="flex flex-row-reverse">
                  {` ${formatPriceToFarsi(payable)}`}
                  <span className="px-1">تومان</span>
                </span>
                <span>مبلغ نهایی</span>
              </div>
            </div>
            <button className="bg-blue-500 w-full text-white rounded-xl p-2 m-3 mx-auto hover:bg-blue-600 transition">
              تکمیل خرید
            </button>
          </div>
        </div>
      </SectionCard>
    </PublicLayout>
  );
}
