import { section } from "framer-motion/client";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import user1 from "../assets/public/images/commitment/user1.jpg";
import user2 from "../assets/public/images/commitment/user2.jpg";
import user3 from "../assets/public/images/commitment/user3.jpg";
import strategy from "../assets/public/images/commitment/strategy-chart.webp";
const Strategies = () => {
  const users = [user1, user2, user3];
  let str = [
    "Growth",
    "Success",
    "Innovate",
    "Lead",
    "Impact",
    "Focus",
    "Tech",
  ];
  return (
    <section className="">
      <div className="container">
        <div>
          <div className="bg-white p-7 rounded-2xl mb-[40px] flex flex-col gap-4">
            <span className=" py-0.5 px-3  bg-teal-950 text-white rounded-full flex items-center gap-1.5  w-fit">
              <span className="w-2 h-2 bg-white block rounded-full"></span>
              Choose The Best
            </span>
            <p className="font-semibold  text-[15px]  md:text-md lg:text-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              labore quae aut ex voluptate. Esse necessitatibus ipsam obcaecati
              unde. Labore totam perspiciatis adipisci officiis accusantium.
            </p>

            <div className="bg-dark-cyan cursor-pointer group flex items-center text-white gap-3 py-1.5 pl-4 pr-2 rounded-full w-fit">
              <span className="font-semibold">Learn More</span>
              <span className="rounded-full  group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
                <IoArrowForwardOutline />
              </span>
            </div>
          </div>
          <div className="grid   md:grid-cols-2 xl:grid-cols-3 gap-[50px] ">
            <div className="bg-white p-7 rounded-2xl flex flex-col justify-between h-[430px]">
              <h1 className="text-xl md:text-2xl 2xl:text-[30px] font-semibold">
                Rebranding Strategy For A <br />
                Growing
              </h1>
              <div className="grid-cols-3 grid w-full h-full items-center relative  px-3">
                <img className="user-img" src={user1} alt="" />
                <img className="user-img  scale-125  " src={user2} alt="" />
                <img className="user-img" src={user3} alt="" />
              </div>
              <div className="flex items-center gap-7">
                <span className="font-bold text-[30px] xl:text-[55px]">
                  200
                </span>
                <p className=" text-md md:text-[20px] text-gray-500  font-semibold">
                  Satisfied customers work with out Bexon.
                </p>
              </div>
            </div>
            <div className="h-[430px]  flex flex-col justify-between bg-white p-7 rounded-2xl">
              <h1 className="text-xl md:text-2xl 2xl:text-[30px] font-semibold">
                Rebranding Strategy For A <br />
                Growing
              </h1>

              <img src={strategy} className=" h-[80%] w-[100%]" alt="" />
            </div>
            <div className="h-[430px] flex flex-col justify-between  bg-white p-7 rounded-2xl">
              <div>
                <h1 className=" text-xl md:text-2xl 2xl:text-[30px] font-semibold mb-3">
                  Rebranding Strategy For A <br />
                  Growing
                </h1>
                <p className="text-gray-400 font-semibold text-xl">
                  Our team are always available to addressed our concerns,
                  providing quick solution.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 w-full">
                {str.map((sp) => (
                  <span className="span-str">{sp}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
