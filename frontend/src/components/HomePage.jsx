import React from "react";
import HeroSection from "./modules/HeroSection";
import Categories from "./modules/Categories";
import NewProducts from "./modules/NewProducts";
import Discounts from "./modules/Discounts";
import Articles from "./modules/Articles";
import PublicLayout from "./layouts/PublicLayout";

const HomePage = () => {
  return (
    <div>
      <PublicLayout>
        <HeroSection />
        <Categories />
        <NewProducts />
        <Discounts />
        <Articles />
      </PublicLayout>
    </div>
  );
};

export default HomePage;
