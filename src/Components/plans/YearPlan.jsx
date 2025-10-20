import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";
const YearPlan = ({ features }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="grid  grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      <div className="bg-white flex flex-col justify-between shadow-lg p-8 rounded-xl">
        <h1 className="font-semibold text-xl">Basic Plan</h1>
        <p className=" text-center text-5xl my-10 flex items-center justify-center font-bold">
          $299<span className=" text-[18px] font-normal">/per Year</span>
        </p>
        <p className="text-md  font-medium mb-7">
          Through a combination of our data-driven insights and innovative
          approaches
        </p>
        <h3 className="text-xl font-semibold mb-3">Plan Include:</h3>
        <div className="flex flex-col gap-3 mb-8">
          {features.map((feature) => (
            <p className="flex items-center gap-3 text-dark-cyan font-medium text-sm md:text-[18px]">
              <span>
                <FaCheck />
              </span>
              {feature}
            </p>
          ))}
        </div>
        <div className="bg-dark-cyan w-full justify-center cursor-pointer group flex items-center text-white gap-3 py-1.5 pl-4 pr-2 rounded-full w">
          <span className="font-semibold">Choose Package</span>
          <span className="rounded-full text-xl  group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
            <IoArrowForwardOutline />
          </span>
        </div>
      </div>
      <div className="bg-dark-cyan text-white shadow-lg p-8 flex flex-col  justify-between  rounded-xl">
        <h1 className="font-semibold text-xl">Basic Plan</h1>
        <p className=" text-center text-5xl my-10 flex items-center justify-center font-bold">
          $599<span className="text-[18px] font-normal">/per month</span>
        </p>
        <p className="text-md  font-medium mb-7">
          Through a combination of our data-driven insights and innovative
          approaches
        </p>
        <h3 className="text-xl font-semibold mb-3">Plan Include:</h3>
        <div className="flex flex-col gap-3 mb-8">
          {features.map((feature) => (
            <p className="flex items-center gap-3  font-medium text-sm md:text-[18px]">
              <span>
                <FaCheck />
              </span>
              {feature}
            </p>
          ))}
        </div>
        <div className="bg-white text-black w-full   justify-center cursor-pointer group flex items-center gap-3 py-1.5 pl-4 pr-2 rounded-full w">
          <span className="font-semibold">Choose Package</span>
          <span className="rounded-full text-xl  group-hover:rotate-[-50deg] transition-all duration-200 text-white bg-black p-1.5 ">
            <IoArrowForwardOutline />
          </span>
        </div>
      </div>{" "}
      <div className="bg-white shadow-lg p-8 flex flex-col justify-between  rounded-xl">
        <h1 className="font-semibold text-xl">Basic Plan</h1>
        <p className=" text-center text-5xl my-10 flex items-center justify-center font-bold">
          $899<span className="text-[18px] font-normal">/per month</span>
        </p>
        <p className="text-md  font-medium mb-7">
          Through a combination of our data-driven insights and innovative
          approaches
        </p>
        <h3 className="text-xl font-semibold mb-3">Plan Include:</h3>
        <div className="flex flex-col gap-3 mb-8">
          {features.map((feature) => (
            <p className="flex items-center gap-3 text-dark-cyan font-medium text-sm md:text-[18px]">
              <span>
                <FaCheck />
              </span>
              {feature}
            </p>
          ))}
        </div>
        <div className="bg-dark-cyan w-full justify-center cursor-pointer group flex items-center text-white gap-3 py-1.5 pl-4 pr-2 rounded-full w">
          <span className="font-semibold">Choose Package</span>
          <span className="rounded-full text-xl  group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
            <IoArrowForwardOutline />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default YearPlan;
