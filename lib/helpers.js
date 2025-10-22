"use server";

import { NextResponse } from "next/server";
import { prisma } from "./prisma";



// گرفتن همه محصولات
export async function getProducts() {
  return await prisma.product.findMany();
}

export async function getCategories() {
  return await prisma.category.findMany();
}

export async function getArticles() {
  return await prisma.article.findMany();
}

export async function getProductBySlug(slug) {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) || null;
}

export async function getSliceNewProducts(limit = 10) {
  const products = await getProducts();
  return [...products]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, limit);
}

export async function getDiscountedProducts() {
  const products = await getProducts();
  const now = new Date();
  return products.filter(
    (p) =>
      p.discountPercent > 0 &&
      (!p.discountEnd || new Date(p.discountEnd) >= now)
  );
}

export async function getSliceNewDiscountedProducts(limit = 10) {
  const discountProducts = await getDiscountedProducts();
  return [...discountProducts]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, limit);
}


//API Route fallback
export async function GET() {
  return NextResponse.json(sampleProducts);
}
