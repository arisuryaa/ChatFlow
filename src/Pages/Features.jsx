import React from "react";
import FeaturesItem from "../Components/FeaturesItem";

const Features = () => {
  return (
    <div className="w-full h-fit">
      <div className="px-20 pb-20">
        <div className="flex flex-col justify-center gap-3 my-20 text-center">
          <h1 className="text-2xl font-semibold font-Poppins">
            Powerful Features to Enhance Your <br />
            Live Chat Experience
          </h1>
          <p className="text-sm text-black text-opacity-70">
            Our live chat product is packed with features to help you connect with your <br /> customers and provide them with the support they need.
          </p>
        </div>

        <div className="flex flex-wrap gap-8">
          <FeaturesItem>
            Our live chat feature allows users to communicate with website visitors in real-time through a chat window. This enables users to provide immediate support and assistance to their
            customers, improving their experience on the website.
          </FeaturesItem>
          <FeaturesItem Heading="Customization options" img="/Customization.svg">
            Our live chat product offers a range of customization options to allow users to tailor the appearance of the chat window to match their website's branding. Users can choose from a variety
            of color schemes and chat bubble designs to create a cohesive look and feel.
          </FeaturesItem>
          <FeaturesItem Heading="Visitor tracking" img="/VisitorTracking.svg">
            Our live chat product includes visitor tracking capabilities, allowing users to see who is on their website and what pages they are viewing. This can help users understand the needs and
            interests of their visitors and provide more targeted support.
          </FeaturesItem>
          <FeaturesItem Heading="Automated chat responses" img="AutomatedChat.svg">
            Our live chat product allows users to set up automated responses to common questions or queries. This can help users handle frequently asked questions more efficiently and free up time to
            focus on more complex or specific issues.
          </FeaturesItem>
          <FeaturesItem Heading="Mobile app" img="/MobileApp.svg">
            Our live chat product includes a mobile app, allowing users to access and manage their live chat service on the go. This makes it easy for users to stay connected with their customers and
            provide support no matter where they are.
          </FeaturesItem>
          <FeaturesItem Heading="Integration with other tools" img="/Integration.svg">
            Our live chat product can be integrated with other tools that users may be using, such as a customer relationship management (CRM) system. This allows users to manage their customer
            interactions and data from a single platform.
          </FeaturesItem>
        </div>
      </div>
    </div>
  );
};

export default Features;
