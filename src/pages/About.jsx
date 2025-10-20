import React from "react";

import pheader from "../assets/public/images/section/pheader-bg.webp";
import { IoIosArrowForward, IoLogoFacebook } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { FaLinkedin, FaRegLightbulb } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import img from "../assets/public/images/about/about-01.webp";
import Companies from "../Components/Companies";
import Testimonials from "../Components/Testimonials";
import { FaSquareTwitter, FaSquareYoutube } from "react-icons/fa6";
import Team from "../Components/Team";
import AnimationPage from "../Components/AnimationPage";
const About = () => {
  return (
    <section className="!pt-0">
      <div className="relative mb-[60px]">
        <div className="w-full h-full   bg-gradient-to-r absolute from-[#00000061] to-[#00000061]"></div>
        <img
          src={pheader}
          className="w-full object-cover object-center h-[250px] sm:h-[350px]  md:h-[450px]  lg:h-[550px]  "
          alt=""
        />
        <span className="absolute bottom-7 text-white flex items-center gap-1.5 font-medium left-[100px]">
          Home <IoIosArrowForward /> About
        </span>
      </div>
      <div className="container">
        <AnimationPage>
          <div className="  rounded-2xl mb-[40px] flex flex-col gap-5 ">
            <div>
              {" "}
              <span className=" py-0.5 px-3 bg-teal-950 text-white rounded-full flex items-center gap-1.5  w-fit">
                <span className="w-2 h-2 bg-white block rounded-full"></span>
                Choose The Best
              </span>
            </div>

            <div className="flex flex-col  md:flex-row justify-between md:items-center gap-3">
              <p className="font-semibold text-xl md:text-[35px] max-w-[500px] ">
                Empowering Business With, Expertise.
              </p>{" "}
              <div className="bg-dark-cyan cursor-pointer h-fit  group flex  items-center text-white gap-3 py-1.5 pl-4 pr-2 rounded-full w-fit">
                <span className="font-semibold text-sm md:text-[16px]">
                  Request a Call
                </span>
                <span className="rounded-full  group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
                  <IoArrowForwardOutline />
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
            <div className="bg-white h-[350px] gap-8 group  p-5 flex flex-col justify-between  shadow-xl hover:text-white hover:bg-teal-950 transition-all duration-200  rounded-lg">
              {" "}
              <span className="w-[80px] h-[80px] group-hover:[transform:rotateY(180deg)]  [transform-style:preserve-3d]  transition-all duration-300 border bg-[linear-gradient(-60deg,_#095f5b6a,_transparent,_#095f5b6a)] border-cyan-900 rounded-full flex text-4xl items-center justify-center">
                <FaRegLightbulb />
              </span>
              <h3 className="text-2xl font-semibold">Innovate Solutions</h3>
              <p className="text-md text-gray-600 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                facilis qui nam explicabo doloremque perspiciatis recusandae ?
              </p>
            </div>
            <div className="bg-white group h-[350px]  p-5 flex flex-col justify-between  shadow-xl hover:text-white hover:bg-teal-950 transition-all duration-200  rounded-lg">
              <span className="w-[80px] h-[80px] group-hover:[transform:rotateY(180deg)]  [transform-style:preserve-3d]  transition-all duration-300 border bg-[linear-gradient(-60deg,_#095f5b6a,_transparent,_#095f5b6a)] border-cyan-900 rounded-full flex text-4xl items-center justify-center">
                <FaAward />
              </span>{" "}
              <h1 className="text-[25px]  font-semibold  ">
                Award-Winning-Expertise
              </h1>
              <p className="text-md text-gray-600 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                facilis qui nam explicabo doloremque perspiciatis recusandae ?
              </p>
            </div>
            <div className="bg-white group h-[350px]  p-5 flex flex-col justify-between  shadow-xl hover:text-white hover:bg-teal-950 transition-all duration-200  rounded-lg">
              <span className="w-[80px] h-[80px] group-hover:[transform:rotateY(180deg)]  [transform-style:preserve-3d]  transition-all duration-300 border bg-[linear-gradient(-60deg,_#095f5b6a,_transparent,_#095f5b6a)] border-cyan-900 rounded-full flex text-4xl items-center justify-center">
                <FaHeadset />
              </span>

              <h1 className="text-[25px]  font-semibold  ">
                Dedicated Support
              </h1>
              <p className="text-md text-gray-600 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                facilis qui nam explicabo doloremque perspiciatis recusandae ?
              </p>
            </div>
          </div>
        </AnimationPage>
        <div className="pt-[200px] pb-[100px]">
          <div className="flex gap-5 flex-col-reverse xl:flex-row ">
            <div>
              {" "}
              <div>
                {" "}
                <span className=" py-0.5 px-3 mb-5 bg-teal-950 text-white rounded-full flex items-center gap-1.5  w-fit">
                  <span className="w-2 h-2 bg-white block rounded-full"></span>
                  Get To Know Us
                </span>
                <p className=" text-xl md:text-3xl 2xl:text-5xl 2xl:[line-height:60px] font-medium mb-6">
                  Driving Innovation And Excellence For Sustainable Corporate
                  Success Worldwide
                </p>
              </div>
              <div className="grid    md:grid-cols-2 gap-3 mb-6">
                <div className="bg-white flex flex-col gap-3  rounded-xl p-5 ">
                  <h1 className="text-2xl font-semibold  ">Our Mission</h1>
                  <p className="text-md">
                    Our Mission in Empower Businesses Through innovate Best
                    Solution, Exceptional Service
                  </p>
                  <div className="flex flex-col gap-3">
                    <p className="flex items-center gap-3">
                      <MdKeyboardArrowRight />
                      Innovation & Excellence
                    </p>
                    <p className="flex items-center gap-3">
                      <MdKeyboardArrowRight />
                      Exceptional Customer
                    </p>
                    <p className="flex items-center gap-3">
                      <MdKeyboardArrowRight />
                      Business Growth
                    </p>
                  </div>
                </div>
                <div className="bg-white flex flex-col gap-3  rounded-xl p-5">
                  <h1 className="text-2xl font-semibold  ">Our Mission</h1>
                  <p className="text-md">
                    Our Mission in Empower Businesses Through innovate Best
                    Solution, Exceptional Service
                  </p>
                  <div className="flex flex-col gap-3">
                    <p className="flex items-center gap-3">
                      <MdKeyboardArrowRight />
                      Innovation & Excellence
                    </p>
                    <p className="flex items-center gap-3">
                      <MdKeyboardArrowRight />
                      Exceptional Customer
                    </p>
                    <p className="flex items-center gap-3">
                      <MdKeyboardArrowRight />
                      Business Growth
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-dark-cyan cursor-pointer h-fit  group flex items-center text-white gap-3 py-1.5 pl-4 pr-2 rounded-full w-full justify-center">
                <span className="font-semibold  [word-spacing:3px]">
                  Learn More About Us
                </span>
                <span className="rounded-full  group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
                  <IoArrowForwardOutline />
                </span>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl h-[450px] md:h-[600px] flex  items-center w-full xl:h-auto">
              <img src={img} className=" w-full   rounded-xl" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Companies />
      <div className="py-[100px]">
        <Testimonials />
      </div>

      <Team />
    </section>
  );
};

export default About;
