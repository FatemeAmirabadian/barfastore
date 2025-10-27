import React from "react";
import Header from "../modules/Header";
import Footer from "../modules/Footer";
import Breadcrumbs from "../modules/Breadcrumbs";

const PublicLayout = ({ children }) => {
 
  return (
    <div>
      <Header />
      <Breadcrumbs/>
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
