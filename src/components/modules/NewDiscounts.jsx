import { getSliceNewDiscountedProducts} from "../../../lib/helpers";
import NewProductsGrid from "./NewProductsGrid";

export default async function NewDiscountsSection() {
  const products = (await getSliceNewDiscountedProducts()) || [];
  if(!products){return}
  
  return (
    <NewProductsGrid
      title="جدیدترین تخفیفات"
      linkHref="/discounts"
      products={products}
    />
  );
}
