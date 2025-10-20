import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
const Process = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div className=" rounded-2xl mb-[40px] flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4">
            <div>
              {" "}
              <span className=" py-0.5 px-3 mb-5 bg-teal-950 text-white rounded-full flex items-center gap-1.5  w-fit">
                <span className="w-2 h-2 bg-white block rounded-full"></span>
                Choose The Best
              </span>
              <p className="font-semibold  text-xl md:text-[35px]">
                Seamless Process,
                <br /> Great Results.
              </p>
            </div>
            <div className="flex  flex-col lg:items-end gap-5">
              <p className="font-semibold  text-sm md:text-[18px] text-gray-600">
                Developing personalized customer journeys to increase
                satisfaction
                <br />
                and loyalty.
              </p>
              <div className="bg-dark-cyan cursor-pointer group flex items-center text-white gap-3 py-1.5 pl-4 pr-2  rounded-full w-fit">
                <span className="  md:font-semibold">Request a Call</span>
                <span className="rounded-full  group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
                  <IoArrowForwardOutline />
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
            <div className="bg-white shadow-xl flex p-8  gap-3 flex-col relative justify-between">
              <span className="text-[100px] md:text-[120px] ml-5 scale-[1.3] w-fit  block font-bold bg-gradient-to-b from-gray-800 to-transparent bg-clip-text text-transparent">
                01
              </span>
              <h3 className="text-2xl font-semibold">Discovery & Planning</h3>
              <p className="  md:text-md text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                facilis qui nam explicabo doloremque perspiciatis recusandae
                nostrum porro exercitationem facere. Minima?
              </p>
              <span className="bg-white border-7 z-10 left-[43%] md:rotate-none md:left-auto md:bottom-0 rotate-[90deg]  bottom-[-40px] md:top-[50%] md:translate-y-[-50%] text-3xl border-gray-300 absolute md:right-[-40px] w-[70px] h-[70px] rounded-full justify-center items-center flex">
                <GoArrowRight />
              </span>
            </div>
            <div className="bg-white shadow-xl flex p-8 flex-col justify-between relative ">
              <span className="text-[100px] md:text-[120px] ml-5 scale-[1.3] block w-fit font-bold bg-gradient-to-b from-gray-800 to-transparent bg-clip-text text-transparent">
                02
              </span>
              <h3 className="text-2xl font-semibold">Discovery & Planning</h3>
              <p className="md:text-md text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                facilis qui nam explicabo doloremque perspiciatis recusandae
                nostrum porro exercitationem facere. Minima?
              </p>
              <span className="bg-white border-7 flex lg:left-auto lg:rotate-none  left-[43%] rotate-[90deg]  bottom-[-40px] lg:top-[50%] lg:translate-y-[-50%] text-3xl border-gray-300 absolute lg:right-[-40px] w-[70px] h-[70px] rounded-full justify-center items-center ">
                <GoArrowRight />
              </span>
            </div>
            <div className="bg-white shadow-xl flex gap-3 p-8 flex-col justify-between md:col-end-3 lg:col-auto ">
              <span className="text-[100px] md:text-[120px] font-bold ml-5 scale-[1.3]  w-fit block bg-gradient-to-b from-gray-800 to-transparent bg-clip-text text-transparent">
                03
              </span>
              <h3 className="text-2xl font-semibold">Discovery & Planning</h3>
              <p className="md:text-md text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                facilis qui nam explicabo doloremque perspiciatis recusandae
                nostrum porro exercitationem facere. Minima?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
