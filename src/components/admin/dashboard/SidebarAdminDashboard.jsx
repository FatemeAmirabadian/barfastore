"use client";
import { useState } from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";
import { BiOutline } from "react-icons/bi";

const SidebarAdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden fixed top-5 right-5 z-50 p-2 bg-orange-400 text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BiOutline size={24} />
      </button>
      <DesktopSidebar />
      <MobileSidebar isOpen={isOpen} />
    </>
  );
};

export default SidebarAdminDashboard;
