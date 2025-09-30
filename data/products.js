import { categories } from "./categories";

export const products = [
  {
    id: 1,
    name: "دفتر 100 برگ",
    slug: "product-1",
    images: [
      { url: "/20250312_135123.jpg" },
      { url: "/20250312_140203.jpg" },
    ],
    price: 100,
    discountPercent: 10,
    discountEnd: "2025-10-10",
    createdAt: "2025-09-29T20:00:00Z",
    category: categories.electronics,
  },
  {
    id: 2,
    name: "خودکار",
    slug: "product-2",
    images: [
      { url: "/20250315_123411.jpg" },
      { url: "/20250317_132059.jpg" },
    ],
    price: 200,
    discountPercent: 0,
    discountEnd: null,
    createdAt: "2025-09-28T18:00:00Z",
    category: categories.stationery,
  },{
    id: 6,
    name: "مداد",
    slug: "product-3",
    images: [
      { url: "/20250317_132059.jpg" },
      { url: "/20250415_134627.jpg" },
    ],
    price: 400,
    discountPercent: 5,
    discountEnd:"2025-10-10",
    createdAt: "2025-09-30T18:00:00Z",
    category: categories.stationery,
  },{
    id: 7,
    name: "تراش",
    slug: "product-3",
    images: [
      { url: "/20250317_132059.jpg" },
      { url: "/20250415_134627.jpg" },
    ],
    price: 400,
    discountPercent: 5,
    discountEnd:"2025-10-10",
    createdAt: "2025-09-30T18:00:00Z",
    category: categories.stationery,
  },{
    id: 8,
    name: "پاکن",
    slug: "product-3",
    images: [
      { url: "/20250317_132059.jpg" },
      { url: "/20250415_134627.jpg" },
    ],
    price: 40210,
    discountPercent: 5,
    discountEnd:"2025-10-10",
    createdAt: "2025-09-30T18:00:00Z",
    category: categories.stationery,
  },{
    id: 9,
    name: "Product 3",
    slug: "product-3",
    images: [
      { url: "/20250317_132059.jpg" },
      { url: "/20250415_134627.jpg" },
    ],
    price: 400,
    discountPercent: 5,
    discountEnd:"2025-10-10",
    createdAt: "2025-09-30T18:00:00Z",
    category: categories.stationery,
  },
];
