import React from "react";
import PlanItem from "../Components/PlanItem";

const Plan = () => {
  return (
    <div className="w-full px-20 py-10 h-fit">
      <div className="flex flex-col gap-2 mb-10 text-center">
        <h1 className="text-2xl font-semibold font-Poppins">Affordable Plans for Any Business</h1>
        <p className="text-sm text-black font-Poppins text-opacity-60">
          Our pricing plans are designed to be affordable for businesses of all sizes. From our <br />
          "Starter" plan to our "Enterprise" option, we have a plan that will fit your budget <br /> and meet your live chat needs.
        </p>
      </div>

      <div className="flex flex-wrap gap-10">
        <PlanItem
          data={["Real-time chat", "Customization options", "File sharing", "Visitor tracking"]}
          color={"bg-secondary"}
          price={"$9.99/Month"}
          heading={"Starter"}
          checklist={"/StarterChecklist.svg"}
        ></PlanItem>
        <PlanItem
          data={["All features in the Starter plan", "Mobile app", "Integration with other tools", "Multilingual support"]}
          color={"bg-third"}
          price={"$29.99/Month"}
          heading={"Professional"}
          checklist={"/ProfesionalChecklist.svg"}
        ></PlanItem>
        <PlanItem
          data={["All features in the Professional plan", "Dedicated account manager", "Premium support", "Custom integration options"]}
          color={"bg-fourth"}
          price={"$99.99/Month"}
          heading={"Enterprise"}
          checklist={"/EnterpriseChecklist.svg"}
        ></PlanItem>
      </div>
    </div>
  );
};

export default Plan;
