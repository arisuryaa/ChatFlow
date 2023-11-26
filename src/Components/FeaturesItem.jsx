import React from "react";

const FeaturesItem = ({ img = "/RealTimeChat.svg", Heading = "Real Time Chat", children }) => {
  return (
    <div className="flex flex-col md:w-[30%] w-full gap-2">
      <img src={img} alt="image" className="px-2 py-2 rounded-md h-9 w-fit bg-secondary" />
      <h1 className="text-lg font-semibold font-Poppins">{Heading}</h1>
      <p className="text-[12px] leading-5 text-black font-Poppins text-opacity-70">{children}</p>
    </div>
  );
};

export default FeaturesItem;
