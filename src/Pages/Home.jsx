import React from "react";
import HeroSection from "../component/HeroSection/HeroSection.jsx";
import Crafting from "../component/Crafting/Crafting.jsx";
import Flavor from "../component/Flavor/Flavor.jsx";
import SpecialItems from "../component/SpecialItems/SpecialItems.jsx";
import About from "../Pages/About.jsx";
import Footer from "../component/Footer/Footer.jsx";



const Home = () => {
  return (
    <div>
      <HeroSection />
      <Crafting />
      <Flavor />
      <SpecialItems />
      <About />
      <Footer />


    </div>
  );
};

export default Home;
