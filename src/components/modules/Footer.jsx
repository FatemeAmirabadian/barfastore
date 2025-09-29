import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-purple-100 py-5 md:px-8 hidden md:flex md:flex-col md:flex-row md:items-center md:justify-center md:justify-between">
      <Logo />
      <p className="text-sm text-gray-700 mt-3 md:mt-0">
        © 2025 برفا استور. همه حقوق محفوظ است.
      </p>
    </footer>
  );
};

export default Footer;
