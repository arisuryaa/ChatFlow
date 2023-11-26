import React from "react";
import Button from "../Components/Button";
import FooterList from "../Components/FooterList";

const Footer = () => {
  return (
    <div className="w-full px-20 pt-20 pb-5 h-fit">
      <div className="flex items-center md:justify-between flex-col md:flex-row pb-4 border-b-[1px] border-black border-opacity-10">
        <div className="flex flex-col w-2/3 gap-3 mb-4">
          <h1 className="text-xl font-semibold text-black font-Poppins ">Sign Up and Start Chatting Today</h1>
          <p>Don't wait any longer to start improving the user experience on your website. Sign up for our live chat product and start connecting with your customers in real-time.</p>
        </div>
        <Button>Sign Up Now</Button>
      </div>
      <div className="flex px-10 mt-10 md:justify-between border-b-[1px] border-black border-opacity-10 pb-8  flex-wrap gap-10 md:gap-0">
        <FooterList heading={"Product"} list={["Download App", "Integration", "Case Studies", "API"]}></FooterList>
        <FooterList heading={"Company"} list={["About Us", "Contact", "Privacy Policy", "Terms of Service", "Help"]}></FooterList>
        <FooterList heading={"Essential"} list={["Documentation", "Playground", "Sandbox", "Source Code"]}></FooterList>
        <FooterList heading={"Get In Touch"} list={["Twitter", "Facebook", "Dribble"]}></FooterList>
        {/* <FooterList></FooterList> */}
      </div>
      <div className="mt-5 text-center">Copyright By arisurya - design by Nauval</div>
    </div>
  );
};

export default Footer;
