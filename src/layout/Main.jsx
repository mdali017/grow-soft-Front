import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavigationBar/NavBar";

function Main() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Main;
