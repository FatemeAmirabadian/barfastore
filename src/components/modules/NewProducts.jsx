import { getSliceNewProducts } from "../../../lib/helpers";
import NewProductsGrid from "./NewProductsGrid";

export default async function NewProductsSection() {
  const products = (await getSliceNewProducts()) || [];

  return (
    <NewProductsGrid
      title="جدیدترین محصولات"
      linkHref="/products"
      products={products}
    />
  );
}
