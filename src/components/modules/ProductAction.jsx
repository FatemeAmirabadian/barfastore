"use client";
import { useState } from "react";
import ColorSelector from "../elements/ColorSelector";
import { formatPriceToFarsi, getDiscountedPrice } from "../../../lib/helpers";
import FavoriteButton from "../elements/FavoriteButton";
import { useCartStore } from "../../../store/cartStore";
import { FailAlrt, SuccessAlrt } from "../elements/Alerts";

export default function ProductActions({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const [selectedColor, setSelectedColor] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [colorSelectedSuccess, setColorSelectedSuccess] = useState(false);
  const hasDiscount =
    product.discountPercent > 0 &&
    (!product.discountEnd || new Date(product.discountEnd) >= new Date());

  const finalPrice = hasDiscount
    ? getDiscountedPrice(product.price, product.discountPercent)
    : product.price;

  const handleAddToCart = async () => {
    if (!selectedColor) return FailAlrt("لطفا حداقل یک رنگ را انتخاب کنید");
    addToCart(product, selectedColor, finalPrice);
    SuccessAlrt("محصول به سبد خرید اضافه شد");
  };

  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setColorSelectedSuccess(!color);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* لایک و انتخاب رنگ */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
        <FavoriteButton
          productId={product.id}
          isWishlisted={isWishlisted}
          onToggle={toggleWishlist}
        />
        <div>
          <p className="text-lg font-semibold">{product.name}</p>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>
      </div>

      {/* انتخاب رنگ */}
      {product.colors && (
        <ColorSelector
          colors={product.colors}
          selectedColors={selectedColor}
          onChange={handleColorChange}
        />
      )}

      {/* قیمت و افزودن به سبد خرید */}
      <div className="flex justify-between items-center mt-3">
        <div>
          {hasDiscount && (
            <span className="line-through text-gray-400 text-md md:text-xl mr-2">
              {formatPriceToFarsi(product.price)}
            </span>
          )}
          <br />
          <span className="flex flex-reverse gap-1 items-center text-blue-700 font-bold text-md md:text-xl">
            <span className="text-sm">تومان</span>
            {formatPriceToFarsi(finalPrice)}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className={`rounded-lg text-white transition text-md md:text-xl p-2 ${
            !selectedColor
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
