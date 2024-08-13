import React from "react";
import TopNavBar from "./TopNavBar";
import MiddleNavBar from "./MiddleNavBar";
import BottomNavBar from "./BottomNavBar";

function NavBar() {
  return (
    <div>
      <TopNavBar />
      
        <MiddleNavBar />
        <BottomNavBar />
     
    </div>
  );
}

export default NavBar;
