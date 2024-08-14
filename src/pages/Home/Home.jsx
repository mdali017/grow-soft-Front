import { Button } from "@material-tailwind/react";
import React from "react";
import HeroSlider from "./HeroSlider/HeroSlider";
import ShippingSection from "./ShippingSection/ShippingSection";
import PopularSellSection from "./PopularSellSection/PopularSellSection";
import NewArrivalsSection from "./NewArrivalsSection/NewArrivalsSection";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";
import DiscountSection from "./DiscountSection/DiscountSection";

function Home() {
  return (
    <div>
      <HeroSlider />
      <ShippingSection />
      <PopularSellSection />
      <NewArrivalsSection />
      <TopSellingProducts />
      <DiscountSection />
    </div>
  );
}

export default Home;
