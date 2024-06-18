import React from "react";
import Navbar from "./Navbar.jsx";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import Robot from "./robot.jsx";

function Layout() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer path={location.pathname} />
    </>
  );
}

export default Layout;
