import { getProducts } from "../../../lib/helpers";
import ProductForm from "./ProductForm";

export default async function EditProductForm({ params }) {
  let products = [];
  try {
    products = await getProducts();
  } catch (err) {
    console.error("Failed to fetch products:", err);
  }
  const product = products.find((p) => p.slug === params.slug);

  return <ProductForm mode="edit" initialData={product} />;
}
