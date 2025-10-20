import React from "react";
import { FaAward, FaHeadset, FaRegLightbulb } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import pheader from "../assets/public/images/section/pheader-bg.webp";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import AnimationPage from "../Components/AnimationPage";
const Contact = () => {
  const contact = [
    {
      icon: <IoLocationSharp />,
      title: "Our Location",
      text: "993 Renner Burg, West Road, MT 94251-030",
    },
    {
      icon: <MdOutlineEmail />,
      title: "Email Us",
      text: "example@gmail.com",
      text2: "example@gmail.com",
    },
    {
      icon: <IoCall />,
      title: "Call Us",
      text: "+201295671230",
      text2: "+201295671230",
    },
    {
      icon: <LuMessageSquareMore />,
      title: "Livechat@demo.com",
      text: "Cairo, Cairo Governorate",
      text2: "Need Help?",
    },
  ];
  return (
    <>
      <div className="relative">
        <div className="w-full h-full   bg-gradient-to-r absolute from-[#00000061] to-[#00000061]"></div>
        <img
          src={pheader}
          className="w-full object-cover object-center h-[250px] sm:h-[350px]  md:h-[450px]  lg:h-[550px]  "
          alt=""
        />
        <span className="absolute bottom-7 text-white flex items-center gap-1.5 font-medium left-[100px]">
          Home <IoIosArrowForward /> Contact
        </span>
      </div>
      <section>
        <div className="container">
          <AnimationPage>
            <div className="grid grid-cols-1   md:grid-cols-2 gap-5">
              {contact.map((data) => (
                <div className="bg-white gap-3 group items-center  p-5 flex flex-col     shadow-xl hover:text-white hover:bg-teal-950 transition-all duration-200  rounded-lg">
                  {" "}
                  <span className="w-[80px] mb-4 h-[80px] group-hover:[transform:rotateY(180deg)]  [transform-style:preserve-3d]  transition-all duration-300 border bg-[linear-gradient(-60deg,_#095f5b6a,_transparent,_#095f5b6a)] border-cyan-900 rounded-full flex text-4xl items-center justify-center">
                    {data.icon}
                  </span>
                  <h3 className="text-2xl font-semibold">{data.title}</h3>
                  <div className="text-center flex flex-col gap-2 group-hover:text-white text-xl text-gray-500">
                    {" "}
                    <span>{data.text}</span>
                    {data.text2 && <span>{data.text2}</span>}
                  </div>
                </div>
              ))}
            </div>
            <div className=" pt-[100px] flex flex-col items-center justify-center">
              <h1 className=" text-xl md:text-[40px]   mb-[50px] text-gray-900 flex gap-3 font-bold">
                Get In Touch With Us Now!
              </h1>
              <div className="w-[1000px] flex flex-col gap-4 max-w-full">
                {" "}
                <div className="flex gap-5 ">
                  <input
                    type="text"
                    className="w-full p-2 border-2 border-gray-400 rounded-md"
                    placeholder="Your First Name"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border-2 border-gray-400 rounded-md"
                    placeholder="Your Last Name"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border-2 border-gray-400 rounded-md"
                  required
                />
                <textarea
                  name=""
                  className=" w-full p-2 border-2 border-gray-400 rounded-md     !pt-3 "
                  placeholder="Type Message"
                  rows={8}
                  id=""
                ></textarea>
                <button className=" px-10 w-fit bg-teal-950 hover:bg-teal-800 cursor-pointer transition-all duration-200 text-[18px] font-semibold text-white py-2 rounded-[5px]">
                  Send
                </button>
              </div>
            </div>
          </AnimationPage>
        </div>
      </section>
    </>
  );
};

export default Contact;
