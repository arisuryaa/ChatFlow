import React from "react";

const Button = ({ children, variant = "bg-black text-white rounded-lg" }) => {
  return <button className={`outline-none text-sm  w-fit px-6 py-2 h-fit ${variant}`}>{children}</button>;
};

export default Button;
