import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

const Homepage = () => {
  return (
    <div className="w-full bg-auto h-fit bg-homepage ">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Homepage;
