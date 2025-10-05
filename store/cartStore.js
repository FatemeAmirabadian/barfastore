"use client";
import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product, selectedColor, finalPrice) =>
    set((state) => {
      const existingIndex = state.cart.findIndex(
        (p) => p.productId === product.id
      );

      if (existingIndex !== -1) {
        const newCart = [...state.cart];
        const existingProduct = { ...newCart[existingIndex] };

        existingProduct.colorQuantities = existingProduct.colorQuantities || {};

        // افزایش تعداد رنگ انتخاب‌شده
        existingProduct.colorQuantities[selectedColor] =
          (existingProduct.colorQuantities[selectedColor] || 0) + 1;

        // آپدیت جمع کل تعداد
        existingProduct.totalQuantity = Object.values(
          existingProduct.colorQuantities
        ).reduce((sum, qty) => sum + qty, 0);

        newCart[existingIndex] = existingProduct;
        return { cart: newCart };
      }

      // محصول جدید
      return {
        cart: [
          ...state.cart,
          {
            productId: product.id,
            name: product.name,
            images: product.images,
            price: finalPrice,
            totalQuantity: product.totalQuantity,
            colorQuantities: { [selectedColor]: 1 },
            totalQuantity: 1,
          },
        ],
      };
    }),

  clearCart: () => set({ cart: [] }),

  updateColorQuantity: (productId, color, newQty) =>
    set((state) => ({
      cart: state.cart.map((p) =>
        p.productId === productId
          ? {
              ...p,
              colorQuantities: {
                ...p.colorQuantities,
                [color]: Math.max(0, newQty), // حداقل صفر
              },
            }
          : p
      ),
    })),

  removeColorFromCart: (productId, color) =>
    set((state) => ({
      cart: state.cart
        .map((p) => {
          if (p.productId === productId) {
            const newColors = { ...p.colorQuantities };
            delete newColors[color]; // حذف رنگ مورد نظر

            const totalQuantity = Object.values(newColors).reduce(
              (sum, qty) => sum + qty,
              0
            );

            return { ...p, colorQuantities: newColors, totalQuantity };
          }
          return p;
        })
        .filter((p) => p.totalQuantity > 0), // حذف محصول اگر هیچ رنگی باقی نماند
    })),
}));
