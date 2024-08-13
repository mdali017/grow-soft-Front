import { Button } from "@material-tailwind/react";
import React from "react";
import HeroSlider from "./HeroSlider/HeroSlider";
import ShippingSection from "./ShippingSection/ShippingSection";
import PopularSellSection from "./PopularSellSection/PopularSellSection";
import NewArrivalsSection from "./NewArrivalsSection/NewArrivalsSection";

function Home() {
  return (
    <div>
      <HeroSlider />
      <ShippingSection />
      <PopularSellSection />
      <NewArrivalsSection />
    </div>
  );
}

export default Home;
