import React from "react";
import HeroSection from "./modules/HeroSection";
import NewProducts from "./modules/NewProducts";
import PublicLayout from "./layouts/PublicLayout";
import SectionCard from "./modules/SectionCard";
import Trends from "./modules/Trends";
import { CategoriesSlice } from "./CategoriesPage";
import NewDiscounts from "./modules/NewDiscounts";
import NewArticles from "./modules/NewArticles";

const sections = [
  { Component: Trends, useCard: true },
  { Component: HeroSection, useCard: true },
  { Component: CategoriesSlice, useCard: true },
  { Component: NewProducts, useCard: true },
  { Component: NewDiscounts, useCard: true },
  { Component: NewArticles, useCard: true },
];
const HomePage = () => (
  <PublicLayout>
    {sections.map(({ Component, useCard }, index) =>
      useCard ? (
        <SectionCard key={index}>
          {Component === CategoriesSlice ? <CategoriesSlice /> : <Component />}
        </SectionCard>
      ) : (
        <Component key={index} />
      )
    )}
  </PublicLayout>
);

export default HomePage;
