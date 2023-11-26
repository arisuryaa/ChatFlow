import React from "react";

const PlanItem = ({ data, color, price, heading, checklist }) => {
  return (
    <div className="md:w-[30%] w-full flex flex-col bg-white shadow-2xl pb-6 rounded-lg">
      <div className={`py-2 text-center text-white rounded-t-lg ${color} font-Poppins uppercase`}>{heading}</div>
      <div className="border-b-[1px] mx-4 border-black border-opacity-20 py-5 mt-5 text-xl text-center md:text-3xl font-semibold font-Poppins">{price}</div>
      <div className="mx-4 mt-4" key={Math.random()}>
        {data.map((e, i) => (
          <div className="flex items-center gap-3 mb-4" key={i}>
            <img src={checklist} alt="" className="w-auto h-4" />
            <h2 className="text-sm font-medium text-black text-opacity-50 font-Poppins">{e}</h2>
          </div>
        ))}
      </div>
      <div className={`mx-4 mt-3 text-center ${color}`}>
        <button className="py-2 text-white rounded-xl">Choose</button>
      </div>
    </div>
  );
};

export default PlanItem;
