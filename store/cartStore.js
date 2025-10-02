"use client";
import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (item, selectedColor, quantity = 1) =>
    set((state) => {
      const existingIndex = state.cart.findIndex((p) => p.id === item.id);

      if (existingIndex !== -1) {
        // محصول قبلاً توی سبد هست
        const newCart = [...state.cart];
        const product = { ...newCart[existingIndex] };

        // مطمئن می‌شویم که selectedColors و colorQuantities وجود دارند
        product.selectedColors = product.selectedColors || [];
        product.colorQuantities = product.colorQuantities || {};

        // آپدیت تعداد برای رنگ انتخاب‌شده
        product.colorQuantities[selectedColor] =
          (product.colorQuantities[selectedColor] || 0) + quantity;

        // اگر رنگ برای اولین بار انتخاب شده
        if (!product.selectedColors.includes(selectedColor)) {
          product.selectedColors.push(selectedColor);
        }

        newCart[existingIndex] = product;
        return { cart: newCart };
      }

      // محصول جدید: اولین بار به سبد اضافه می‌شود
      return {
        cart: [
          ...state.cart,
          {
            productId: item.id, // فقط شناسه محصول، نه کل دیتا
            name: item.name,
            price: item.price,
            images: item.images,
            discountPercent: item.discountPercent,
            selectedColors: [selectedColor], // فقط رنگ‌های انتخاب‌شده
            colorQuantities: { [selectedColor]: quantity }, // تعداد هر رنگ
          },
        ],
      };
    }),


  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== id),
    })),

  removeColorFromCart: (productId, color) =>
    set((state) => ({
      cart: state.cart.map((p) =>
        p.id === productId
          ? { ...p, colors: p.colors.filter((c) => c !== color) }
          : p
      ),
    })),

  clearCart: () => set({ cart: [] }),
}));
