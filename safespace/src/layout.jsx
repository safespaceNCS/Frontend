// Layout.jsx
import React from "react";
import NavBar from "./components/navBAr";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="relative">
     <div className="fixed top-0 z-10"> <NavBar /></div>
      
        <Outlet />
      
    </div>
  );
}
