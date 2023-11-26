import React from "react";

const FooterList = ({ list, heading }) => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-2 text-lg font-medium text-black font-Poppins text-opacity-70">{heading}</h1>
      {list.map((e) => (
        <a href="" className="py-1 text-sm">
          {e}
        </a>
      ))}
    </div>
  );
};

export default FooterList;
