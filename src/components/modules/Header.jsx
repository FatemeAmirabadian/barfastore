import React from "react";
import Logo from "../elements/Logo";
import Navigation from "./Navigation";
import TopBar from "../elements/TopBar";

const Header = () => {
  return (
    <>
      <TopBar />
      <div className="bg-purple-100 py-5 md:px-8 flex items-center justify-center md:justify-between">
        <Logo />
        <Navigation />
      </div>
    </>
  );
};

export default Header;
