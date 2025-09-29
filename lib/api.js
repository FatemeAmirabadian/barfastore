import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

// گرفتن همه محصولات
export async function getProducts() {
  const res = await api.get("/products");
  return res.data;
}

// گرفتن محصول بر اساس slug
export async function getProductBySlug(slug) {
  const products = await getProducts();
  const product = products.find((p) => p.slug === slug);
  return product || null;
}

//گرفتن 10 محصول اخر
export async function getSliceNewProduct(limit = 10) {
  const products = await getProducts();
  const sorted = [...products].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return sorted.slice(0, limit);
}

// تابع مخصوص محصولات تخفیف دار
export async function getDiscountedProducts() {
  const products = await getProducts();
  const now = new Date();
  return products.filter(
    (p) =>
      p.discountPercent > 0 &&
      (!p.discountEnd || new Date(p.discountEnd) >= now)
  );
}

// گرفتن 10 محصول تخفیف دار جدید
export async function getSliceNewDiscountedProducts(limit = 10) {
  const discountProducts = await getDiscountedProducts();
  const sorted = [...discountProducts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return sorted.slice(0, limit);
}

// تابع گرفتن قیمت تخفیف‌دار
export function getDiscountedPrice(price, discountPercent = 0) {
  if (!price) return null;
  if (discountPercent > 0) {
    return Math.round(price * (1 - discountPercent / 100));
  }
  return price;
}
