import { NextResponse } from "next/server";
import { products } from "../data/products";

export async function getProductBySlug(slug) {
  return products.find(p => p.slug === slug) || null;
}

export async function getSliceNewProducts(limit = 10) {
  return [...products]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

export async function getDiscountedProducts() {
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
