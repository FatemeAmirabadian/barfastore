import axios from "axios";

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

// گرفتن محصول بر اساس ID
export async function getProductById(id) {
  const res = await api.get(`/products/${id}?populate=*`);
  return res.data.data;
}
