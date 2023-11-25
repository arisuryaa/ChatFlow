import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <div className="px-20 mt-6">
        <div className="flex items-center justify-between w-full pb-20">
          <div className="w-1/2">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-medium text-white font-Poppins">Improve your customer experience with real-time assistance</h1>
              <p className="text-white text-opacity-80">
                Our live chat software helps you connect with your customers instantly, boosting sales and improving customer satisfaction. Try it out today and see the difference it can make for your
                business.
              </p>
              <div className="flex gap-5">
                <Button>Get Started</Button>
                <Button variant="bg-secondary text-white rounded-lg">See In Action</Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-1/2">
            <img src="/Homepage.svg" alt="image" className="w-auto h-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
