import React from "react";
import SectionHeader from "./SectionHeader";
import NewDiscounts from "./NewDiscounts";

const DiscountsSection = () => {
  return (
    <div>
      <SectionHeader title="محصولات تخفیفی" linkHref="/discounts" />
      <NewDiscounts />
    </div>
  );
};

export default DiscountsSection;
