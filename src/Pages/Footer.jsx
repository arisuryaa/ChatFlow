import React from "react";
import Button from "../Components/Button";

const Footer = () => {
  return (
    <div className="w-full px-20 pt-20 pb-5 h-fit">
      <div className="flex items-center justify-between pb-4 border-b-[1px] border-black border-opacity-50">
        <div className="flex flex-col w-2/3 gap-3">
          <h1 className="text-xl font-semibold text-black font-Poppins">Sign Up and Start Chatting Today</h1>
          <p>Don't wait any longer to start improving the user experience on your website. Sign up for our live chat product and start connecting with your customers in real-time.</p>
        </div>
        <Button>Sign Up Now</Button>
      </div>
      <div className="mt-5 text-center">Copyright By dewa</div>
    </div>
  );
};

export default Footer;
