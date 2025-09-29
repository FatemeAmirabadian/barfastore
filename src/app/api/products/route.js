import { NextResponse } from "next/server";

// داده‌های نمونه
const products = [
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
    images: [{ url: "/20250315_123411.jpg" }, { url: "/20250317_132059.jpg" }],
    price: 200,
    discountPercent: 0,
    discountEnd: null,
    createdAt: "2025-09-28T18:00:00Z",
  },
];

export async function GET() {
  return NextResponse.json(products);
}
