import React from "react";
import HeroSection from "../component/HeroSection/HeroSection.jsx";
import Crafting from "../component/Crafting/Crafting.jsx";
import Flavor from "../component/Flavor/Flavor.jsx";
import AboutUs from "../component/AboutUs/AboutUs.jsx";
import SpecialItems from "../component/SpecialItems/SpecialItems.jsx";
import ContactUs from "../component/ContactUs/ContactUs.jsx";



const Home = () => {
  return (
    <div>
      <HeroSection />
      <Crafting/>
      <Flavor/>
      <SpecialItems/>
      <AboutUs/>
      <ContactUs/>
      
     
    </div>
  );
};

export default Home;
