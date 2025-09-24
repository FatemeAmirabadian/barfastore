import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <>
      <TopBar />
      <div className="bg-purple-100 p-2 md:px-8 flex items-center justify-center md:justify-between">
        <Logo />
        <Navigation />
      </div>
    </>
  );
};

export default Header;
