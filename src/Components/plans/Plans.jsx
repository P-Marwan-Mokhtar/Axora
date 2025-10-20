import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";

import MonthPlan from "./Monthplan";
import YearPlan from "./YearPlan";
const Plans = () => {
  const [isActive, setIsActive] = useState("Monthly");
  const features = [
    "Access to care services",
    "Limited costumer support (email)",
    "1 Project per month",
    "Basic reporting and analytics",
    "Standard templates and tools",
    "Basic performance tracking",
  ];
  return (
    <section>
      <div className="container">
        <div className="flex items-center flex-col mb-[50px]">
          <span className=" py-1 px-3 mb-5 bg-teal-950 text-white rounded-full flex items-center gap-1.5  w-fit">
            <span className="w-2 h-2 bg-white block rounded-full"></span>
            FLEXIBLE PRICING
          </span>
          <p className="font-semibold text-[35px]">Our Pricing Plan</p>
        </div>
        <div className="flex justify-center mb-10 ">
          <div className="bg-white shadow-lg rounded-lg w-fit  flex p-2">
            <button
              onClick={() => setIsActive("Monthly")}
              className={` px-4 py-2 mr-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
                isActive == "Monthly" ? "bg-dark-cyan text-white" : ""
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsActive("Yearly")}
              className={` px-4 py-2 rounded-lg font-semibold transition-all duration-200  cursor-pointer ${
                isActive == "Yearly" ? "bg-dark-cyan text-white" : ""
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
        {isActive == "Monthly" ? (
          <MonthPlan features={features}  />
        ) : (
          <YearPlan features={features}  />
        )}
      </div>
    </section>
  );
};

export default Plans;
