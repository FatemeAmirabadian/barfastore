"use client";
import { useState } from "react";
import ColorSelector from "../elements/ColorSelector";
import { formatPriceToFarsi, getDiscountedPrice } from "../../../lib/helpers";
import FavoriteButton from "../elements/FavoriteButton";
import toast from "react-hot-toast";
import { useCartStore } from "../../../store/cartStore";

export default function ProductActions({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const [selectedColor, setSelectedColor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [colorSelectedSuccess, setColorSelectedSuccess] = useState(false);
  const hasDiscount =
    product.discountPercent > 0 &&
    (!product.discountEnd || new Date(product.discountEnd) >= new Date());

  const finalPrice = hasDiscount
    ? getDiscountedPrice(product.price, product.discountPercent)
    : product.price;

  const handleAddToCart = async () => {
    if (!selectedColor) return;
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    addToCart({
      ...product,
      selectedColor,
      finalPrice,
      quantity: 1,
    });
    toast.success("محصول به سبد خرید اضافه شد", {
      style: {
        background: "lightgreen",
        color: "white",
        marginBottom: "20px",
        marginLeft: "20px",
      },
      duration: 1500,
    });
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
          <p className="text-sm text-gray-500">{product.category.name}</p>
        </div>
      </div>

      {/* انتخاب رنگ */}
      {product.colors && (
        <>
          <ColorSelector
            colors={product.colors}
            selectedColors={selectedColor}
            onChange={handleColorChange}
          />
          {/* پیام موفقیت انتخاب رنگ */}
          {colorSelectedSuccess ? (
            ""
          ) : (
            <p className="text-red-500 text-sm mt-1 text-right">
              لطفا حداقل یک رنگ انتخاب کنید
            </p>
          )}
        </>
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
          <span className="flex flex-reverse gap-1 items-center text-purple-700 font-bold text-md md:text-xl">
            <span className="text-sm">تومان</span>
            {formatPriceToFarsi(finalPrice)}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={isLoading || !selectedColor}
          className={`rounded-lg text-white transition text-md md:text-xl p-2 ${
            !selectedColor
              ? "bg-purple-300 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-600"
          }`}
        >
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}
