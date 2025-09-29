import axios from "axios";

// ساخت یک instance از axios با fallback
function createApi() {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_LOCAL_URL
      : process.env.NEXT_PUBLIC_PROD_URL || ""; // اگر هنوز آنلاین نیست، خالی بذار

  return axios.create({
    baseURL: baseUrl || undefined,
  });
}

const api = createApi();

// فانکشن عمومی برای گرفتن داده با fallback
async function fetchData(endpoint) {
  if (!api.defaults.baseURL) {
    // هنگام build وقتی URL آنلاین نیست، داده خالی برگردان
    return [];
  }

  const res = await api.get(endpoint);
  return res.data;
}

// گرفتن همه محصولات
export async function getProducts() {
  return fetchData("/products");
}

// گرفتن محصول بر اساس slug
export async function getProductBySlug(slug) {
  const products = await getProducts();
  return products.find(p => p.slug === slug) || null;
}

// گرفتن 10 محصول آخر
export async function getSliceNewProduct(limit = 10) {
  const products = await getProducts();
  const sorted = [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return sorted.slice(0, limit);
}

// گرفتن محصولات تخفیف‌دار
export async function getDiscountedProducts() {
  const products = await getProducts();
  const now = new Date();
  return products.filter(
    p => p.discountPercent > 0 && (!p.discountEnd || new Date(p.discountEnd) >= now)
  );
}

// گرفتن 10 محصول تخفیف‌دار جدید
export async function getSliceNewDiscountedProducts(limit = 10) {
  const discountProducts = await getDiscountedProducts();
  const sorted = [...discountProducts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return sorted.slice(0, limit);
}

// گرفتن قیمت تخفیف‌دار
export function getDiscountedPrice(price, discountPercent = 0) {
  if (!price) return null;
  return discountPercent > 0 ? Math.round(price * (1 - discountPercent / 100)) : price;
}
