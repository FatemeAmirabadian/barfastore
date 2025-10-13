import ProductForm from "./ProductForm";

export default async function EditProductForm({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products`);
  const products = await res.json();
  const product = products.find(p=> p.slug===params.slug)

  return  <ProductForm mode="edit" initialData={product} />;

}
