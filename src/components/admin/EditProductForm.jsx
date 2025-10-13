import { getProducts } from "../../../lib/helpers";
import ProductForm from "./ProductForm";

export default async function EditProductForm({ params }) {
  const products = await getProducts();
  const product = products.find((p) => p.slug === params.slug);
  return <ProductForm mode="edit" initialData={product} />;
}
