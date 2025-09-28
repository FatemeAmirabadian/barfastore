import axios from "axios";

// آدرس Strapi بر اساس محیط
const STRAPI_URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_STRAPI_URL // آدرس آنلاین Strapi
    : "http://localhost:1337"; // لوکال


// تنظیم پایه API Strapi
const api = axios.create({
  baseURL: "http://localhost:1337/api",
});

// گرفتن همه محصولات
export async function getProducts() {
  const res = await api.get("/products?populate=*");
  console.log(res);
  return res.data.data;
}

// گرفتن محصول بر اساس slug
export async function getProductBySlug(slug) {
  const res = await api.get(`/products?filters[slug][$eq]=${slug}&populate=*`);
  return res.data.data?.[0]; // چون Strapi آرایه برمی‌گردونه
}

//گرفتن 10 محصول اخر
export async function getSliceNewProduct() {
  const res = await api.get(
    "/products?sort=createdAt:desc&pagination[limit]=10&populate=*"
  );
  return res.data.data;
}

// تابع مخصوص محصولات تخفیف دار
export async function getDiscountedProducts() {
  const now = new Date().toISOString();
  const res = await api.get(
    `/products?filters[discountPercent][$gt]=0&filters[discountEndDate][$gte]=${now}&populate=*`
  );
  return res.data.data;
}


// گرفتن 10 محصول تخفیف دار جدید
export async function getSliceNewDiscountedProducts() {
  const now = new Date().toISOString();
  const res = await api.get(
    `/products?filters[discountPercent][$gt]=0&filters[discountEndDate][$gte]=${now}&sort=createdAt:desc&pagination[limit]=10&populate=*`
  );
  return res.data.data;
}
