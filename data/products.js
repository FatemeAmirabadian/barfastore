import { categories } from "./categories";

export const products = [
  {
    id: 1,
    name: "دفتر 100 برگ",
    slug: "product-1",
    images: [{ url: "/20250312_135123.jpg" }, { url: "/20250312_140203.jpg" }],
    colors: ["بنفش", "آبی"],
    price: 100,
    discountPercent: 10,
    discountEnd: "2025-10-10",
    createdAt: "2025-09-29T20:00:00Z",
    category: categories.electronics,
    description:
      "دفتر 100 برگ با کیفیت بالا و پوشش مقوایی مناسب برای یادداشت و دفترچه خاطرات.",
    specs: {
      وزن: "200 گرم",
      ابعاد: "20x28 سانتی‌متر",
      جنس: "کاغذ با روکش مقوایی",
      تعداد_برگ: "100 برگ",
    },
    comments: [],
    colorQuantities: {},
  },
  {
    id: 2,
    name: "خودکار",
    slug: "product-2",
    images: [{ url: "/20250315_123411.jpg" }, { url: "/20250317_132059.jpg" }],
    colors: ["زرد", "قرمز"],
    price: 200,
    discountPercent: 0,
    discountEnd: null,
    createdAt: "2025-09-28T18:00:00Z",
    category: categories.stationery,
    description:
      "خودکار با نوک 0.5 میلی‌متر و جوهر روان برای نوشتاری صاف و بدون وقفه.",
    specs: {
      نوع_نوک: "0.5 میلی‌متر",
      رنگ_جوهر: "آبی",
      طول: "14 سانتی‌متر",
      جنس: "پلاستیک با کیفیت",
    },
    comments: [],
    colorQuantities: {},
  },
  {
    id: 6,
    name: "مداد",
    slug: "product-3",
    images: [{ url: "/20250317_132059.jpg" }, { url: "/20250415_134627.jpg" }],
    colors: ["قرمز", "صورتی", "بنفش", "آبی"],
    price: 40110,
    discountPercent: 5,
    discountEnd: "2025-10-10",
    createdAt: "2025-09-30T18:00:00Z",
    category: categories.stationery,
    description:
      "مداد با کیفیت HB مناسب طراحی، نقاشی و نوشتن روزمره، ساخته شده از چوب طبیعی.",
    specs: {
      سختی_مداد: "HB",
      طول: "17 سانتی‌متر",
      جنس: "چوب طبیعی",
    },
    comments: [],
    colorQuantities: {},
  },
];
