import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-12 md:px-20 font-Poppins ">
      <div className="flex items-center gap-10">
        <h1 className="mr-5 text-xl font-semibold text-white font-Poppins">ChatFlow</h1>
        <div className="hidden font-thin text-white md:gap-10 md:text-sm md:flex">
          <a href="">Home</a>
          <a href="">Pricing</a>
          <a href="">Support</a>
          <a href="">Contact Us</a>
        </div>
      </div>
      <div className="flex items-center gap-7">
        <a href="" className="font-semibold text-white">
          Login
        </a>
        <a href="" className="px-5 py-2 text-sm font-semibold bg-white bg-opacity-50 rounded-lg">
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
