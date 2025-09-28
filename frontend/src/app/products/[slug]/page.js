import ProductDetailPage from "@/components/ProductPageDetails";

const page = ({params}) => {
  return (
    <div>
      <ProductDetailPage params={params} />
    </div>
  );
};

export default page;
