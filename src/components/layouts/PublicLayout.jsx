import React from "react";
import Header from "../modules/Header";
import Footer from "../modules/Footer";
import { Vazirmatn } from "next/font/google";

const PublicLayout = ({ children }) => {
  const vazir = Vazirmatn({
    subsets: ["arabic"], // چون فارسی است
    weight: ["400", "500", "700"], // وزن‌های مورد نیاز
    display: "swap", // برای لود سریع‌تر
  });

  return (
    <div className={vazir.className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
