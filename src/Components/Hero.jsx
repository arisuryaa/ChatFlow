import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <div className="w-full px-10 mt-6 md:px-20">
        <div className="flex flex-col pb-20 md:flex-row md:items-center justify-normal md:justify-between">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col w-full gap-4 md:flex-col">
              <h1 className="text-2xl font-medium text-white lg:text-5xl font-Poppins">Improve your customer experience with real-time assistance</h1>
              <p className="text-white text-opacity-80">
                Our live chat software helps you connect with your customers instantly, boosting sales and improving customer satisfaction. Try it out today and see the difference it can make for your
                business.
              </p>
              <div className="flex gap-5">
                <Button>Get Started</Button>
                <Button variant="bg-white text-black rounded-lg">See In Action</Button>
              </div>
            </div>
          </div>
          <div className="w-full md:flex md:justify-center md:w-1/2">
            <img src="/Homepage.svg" alt="image" className="hidden md:w-auto md:h-96 md:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
