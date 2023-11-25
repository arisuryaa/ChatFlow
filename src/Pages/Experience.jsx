import React from "react";
import Button from "../Components/Button";

const Experience = () => {
  return (
    <div className="w-full h-fit bg-gradient-to-r from-coklat to-coklatMuda">
      <div className="px-20 py-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col w-1/2 gap-4">
            <h1 className="text-3xl font-semibold font-Poppins">Experience the Power of Our Live Chat</h1>
            <p className="text-sm text-black font-Poppins text-opacity-60">
              See for yourself how our live chat can help you connect with your customers and improve their experience on your website. Check out a screenshot of our live chat in action.
            </p>
            <div className="my-5">
              <Button>Book a Demo</Button>
            </div>
            <div className="flex items-center justify-center gap-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-semibold font-Poppins">Improving Customer Support</h1>
                <p className="text-xs">A small e-commerce company implemented a live chat feature on their website and saw an improvement in customer satisfaction and an increase in sales.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-semibold font-Poppins">Boosting Sales</h1>
                <p className="text-xs">A small e-commerce company implemented a live chat feature on their website and saw an improvement in customer satisfaction and an increase in sales.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-1/2">
            <img src="/Experience.svg" alt="image" className="w-auto h-[35rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
