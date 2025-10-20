import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoMdQuote } from "react-icons/io";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import AnimationPage from "./AnimationPage";
const LandingPage = () => {
  return (
    <section className="relative !py-0 h-screen   bg-center md:bg-top   bg-[url('/src/assets/public/images/hero/hero-bg.webp')]   bg-no-repeat bg-cover">
      {" "}
      <div className="bg-[linear-gradient(to_right_,#011d19e9,_transparent,_#011d19e9)]  w-full h-full">
        <AnimationPage>
          {" "}
          <div className="container   w-full h-full flex  items-center z-20">
            <div className="">
              <h1 className=" text-3xl md:text-base/18 md:text-[70px] mb-5 text-white font-semibold max-w-[700px] tracking-wide  ">
                Transforming Ideas Into Reality
              </h1>
              <div className="bg-dark-cyan cursor-pointer group flex items-center text-white gap-3 py-1.5 px-3 rounded-full w-fit">
                <span for className="font-semibold">
                  Get Started Now
                </span>
                <span className="rounded-full  group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
                  <IoArrowForwardOutline />
                </span>
              </div>
            </div>
          </div>
          <div className="absolute md:flex justify-between hidden flex-col p-[35px] bottom-5  right-5 md:w-[500px] md:h-[300px] backdrop-blur-lg bg-[#ededed0e] text-white">
            <span className="text-[60px] ">
              <IoMdQuote />
            </span>
            <p className=" md:text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus, incidunt?
            </p>
            <h3 className="text-[70px] font-bold relative after:content-['+'] after:top-[-15px] after:absolute">
              10M
            </h3>
          </div>
        </AnimationPage>
      </div>
    </section>
  );
};

export default LandingPage;
