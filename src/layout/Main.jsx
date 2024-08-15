import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavigationBar/NavBar";
import Footer from "../components/Shared/Footer/Footer";

function Main() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
