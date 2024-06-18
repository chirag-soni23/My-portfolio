import React from "react";
import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import Robot from "./robot.jsx";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
