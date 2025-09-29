// lib/products.js
import { NextResponse } from "next/server";

// --- داده‌های نمونه (fallback) ---
const sampleProducts = [
  {
    id: 1,
    name: "Product 1",
    slug: "product-1",
    images: [
      { url: "/20250312_135123.jpg" },
      { url: "/20250312_140203.jpg" },
    ],
    price: 100,
    discountPercent: 10,
    discountEnd: "2025-10-10",
    createdAt: "2025-09-29T20:00:00Z",
  },
  {
    id: 2,
    name: "Product 2",
    slug: "product-2",
    images: [
      { url: "/20250315_123411.jpg" },
      { url: "/20250317_132059.jpg" },
    ],
    price: 200,
    discountPercent: 0,
    discountEnd: null,
    createdAt: "2025-09-28T18:00:00Z",
  },
];

// --- توابع Server-side بدون fetch مستقیم ---
export async function getProducts() {
  return sampleProducts;
}

export async function getProductBySlug(slug) {
  const products = await getProducts();
  return products.find(p => p.slug === slug) || null;
}

export async function getSliceNewProduct(limit = 10) {
  const products = await getProducts();
  return [...products]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

export async function getDiscountedProducts() {
  const products = await getProducts();
  const now = new Date();
  return products.filter(
    p => p.discountPercent > 0 && (!p.discountEnd || new Date(p.discountEnd) >= now)
  );
}

export async function getSliceNewDiscountedProducts(limit = 10) {
  const discountProducts = await getDiscountedProducts();
  return [...discountProducts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

export function getDiscountedPrice(price, discountPercent = 0) {
  if (!price) return null;
  return discountPercent > 0 ? Math.round(price * (1 - discountPercent / 100)) : price;
}

// --- API Route fallback (اگر خواستید) ---
export async function GET() {
  return NextResponse.json(sampleProducts);
}
