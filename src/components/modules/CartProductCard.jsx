import React from "react";
import { useCartStore } from "../../../store/cartStore";
import { formatPriceToFarsi, getDiscountedPrice } from "../../../lib/helpers";
import Image from "next/image";
import QuantitySelector from "../elements/QuantitySelector";
import { SlTrash } from "react-icons/sl";

const CartProductCard = () => {
  const { cart , updateColorQuantity , removeColorFromCart } = useCartStore();
  const handleIncrease = (productId, color) => {
    const product = cart.find((p) => p.productId === productId);
    if (product) {
      updateColorQuantity(productId, color, product.colorQuantities[color] + 1);
    }
  };
  
  const handleDecrease = (productId, color) => {
    const product = cart.find((p) => p.productId === productId);
    if (product) {
      updateColorQuantity(productId, color, product.colorQuantities[color] - 1);
    }
  };

  return (
    <div className="bg-white w-full p-4 rounded-lg">
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">سبد خرید شما خالی است</p>
      ) : (
        cart
          .flatMap((product) =>
            Object.entries(product.colorQuantities).map(([color, qty]) => ({
              productId: product.productId,
              name: product.name,
              image: product.images?.[0]?.url || "",
              color,
              qty,
              price: product.price,
            }))
          )
          .map((product, index) => (
            <div
              key={index}
              className="p-2 mb-2 flex justify-between items-center border-b border-gray-200 rounded-lg"
            >
              <div className="flex flex-col justify-between gap-10">
                <button
                  onClick={() => removeColorFromCart(product.productId,product.color)}
                  className="text-red-500 bg-red-200 p-1 rounded-md mb-2 flex justify-center items-center w-10 md:15"
                >
                  <SlTrash/>
                </button>
                <div className="flex flex-row-reverse text-blue-600 font-semibold">
                  {formatPriceToFarsi(product.price)}
                  <span className="px-1"> تومان</span>
                </div>
              </div>

              <div className="flex gap-2 text-right">
                <div className="flex flex-col justify-start items-end text-sm">
                  <p className="text-xl font-semibold mb-2">{product.name}</p>
                  <div className="flex flex-row-reverse items-center gap-2">
                    <span className="bg-gray-200 rounded-md p-1 px-2 text-center w-15 md:w-20">
                      {product.color}
                    </span>
                    <QuantitySelector
                      quantity={product.qty}
                      onIncrease={() =>
                        handleIncrease(product.productId, product.color)
                      }
                      onDecrease={() =>
                        handleDecrease(product.productId, product.color)
                      }
                    />
                  </div>
                </div>
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded-md md:ml-4 mb-2 md:mb-0"
                  />
                )}
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default CartProductCard;
