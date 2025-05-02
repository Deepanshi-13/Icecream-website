import React from "react";
import HeroSection from "../component/HeroSection/HeroSection.jsx";
import Crafting from "../component/Crafting/Crafting.jsx";
import Flavor from "../component/Flavor/Flavor.jsx";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <Crafting/>
      <Flavor/>
     
    </div>
  );
};

export default Home;
