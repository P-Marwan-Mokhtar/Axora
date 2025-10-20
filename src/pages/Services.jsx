import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import pheader from "../assets/public/images/section/pheader-bg.webp";

import { IoArrowForwardOutline } from "react-icons/io5";

import { FaBuilding } from "react-icons/fa";

import { BiGridAlt } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { SiOpenai } from "react-icons/si";
import { FaLeaf } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AnimationPage from "../Components/AnimationPage";
const Services = () => {
  const services = [
    {
      title: "Business Strategy Development",
      icon: <FaBuilding />,
      p: "Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized solutions.",
    },
    {
      title: "Customer Experience Solutions",
      icon: <FaUser />,
      p: "Developing personalized customer journeys to increase solutions and loyalty. ",
    },
    {
      title: "Sustainability And ESG Consulting",
      icon: <FaLeaf />,
      p: "Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.",
    },
    {
      title: "Training And Development Programs ",
      icon: <BiGridAlt />,
      p: "Training and Development PRograms are designed to empower employees with the skills, knowledge, and tools they need.",
    },
    {
      title: "IT Support & Maintenance",
      icon: <FaTools />,
      p: "Our IT SUpport & Maintenance services ensure that your technology infrasturcture is running smoothly and securely.",
    },
    {
      title: "Marketing Strategy & Campaigns",
      icon: <FaProjectDiagram />,
      p: "Effective marketing is key to driving business growth. Our Marketing Strategy & Campaigns service.",
    },
  ];
  return (
    <>
      <div className="relative">
        <div className="w-full h-full   bg-gradient-to-r absolute from-[#00000061] to-[#00000061]"></div>
        <img
          src={pheader}
          className="w-full  object-cover object-center h-[250px] sm:h-[350px]  md:h-[450px]  lg:h-[550px]  "
          alt=""
        />
        <span className="absolute bottom-7 text-white flex items-center gap-1.5 font-medium left-[100px]">
          Home <IoIosArrowForward /> Services List
        </span>
      </div>
      <section>
        <AnimationPage>
          <div className="container">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((data, i) => (
                <Link to={"/servicesdetails"}>
                  <div
                    key={i}
                    className="bg-white group  md:h-[500px] p-10 flex flex-col  shadow-xl hover:text-white hover:bg-teal-950 transition-all duration-200  rounded-lg"
                  >
                    <div className="">
                      <span className="w-[80px] mb-15 h-[80px] group-hover:[transform:rotateY(180deg)]  [transform-style:preserve-3d]  transition-all duration-300 border bg-[linear-gradient(-60deg,_#095f5b6a,_transparent,_#095f5b6a)] border-cyan-900 rounded-full flex text-4xl items-center justify-center">
                        {data.icon}
                      </span>
                    </div>
                    <div className="flex gap-5 md:gap-0 flex-col h-full justify-between">
                      <div>
                        <h1 className="text-md md:text-xl lg:text-[25px]  mb-5 font-semibold max-w-[350px] ">
                          {data.title}
                        </h1>
                        <p className=" lg:text-xl  text-gray-500 group-hover:text-white font-medium">
                          {data.p}
                        </p>
                      </div>
                      <div className=" flex items-center  gap-3 py-1.5 px-3 rounded-full cursor-pointer group">
                        <span className="text-[18px] text-teal-800 group-hover:text-white">
                          Learn More
                        </span>
                        <span className="rounded-full text-xl text-white group-hover:bg-white group-hover:text-teal-950 bg-teal-950  p-1.5 group-hover:rotate-[-50deg] transition-all duration-200">
                          <IoArrowForwardOutline />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimationPage>
      </section>
    </>
  );
};

export default Services;
