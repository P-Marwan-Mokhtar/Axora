import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import award from "../assets/public/images/footer/award-logo-1.webp";
import award2 from "../assets/public/images/footer/award-logo-2.webp";
import app from "../assets/public/images/footer/app.webp";
import google from "../assets/public/images/footer/google.webp";
import { FaPaperPlane } from "react-icons/fa";
const Footer = () => {
  const services = [
    "Customer Experience",
    "Training Programs",
    "Business Strategy",
    "Training Program",
    "ESG Consulting",
    "Development",
  ];
  const resources = [
    "Contact us",
    "Team Member",
    "Recognitions",
    "Careers",
    "News",
    "Feedback",
  ];
  return (
    <footer>
      <div className="container">
        <div>
          <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:items-center justify-between py-10 border-b border-gray-300">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
              {" "}
              <p className="flex gap-2 items-center">
                <span>
                  <IoLocationOutline />
                </span>
                Cairo, Cairo Governorate
              </p>
              <p className="flex gap-2 items-center">
                <FaPhone />
                +201295671230
              </p>
              <p className="flex gap-2 items-center">
                <TfiEmail />
                exampleweb@gmail.com
              </p>
            </div>
            <div className="flex gap-3 ">
              <span className="text-3xl cursor-pointer">
                <IoLogoFacebook />
              </span>
              <span className="text-3xl cursor-pointer">
                <FaSquareTwitter />
              </span>
              <span className="text-3xl cursor-pointer">
                <FaLinkedin />
              </span>
              <span className="text-3xl cursor-pointer">
                <FaSquareYoutube />
              </span>
            </div>
          </div>
          <div className="grid  gap-6 md:gap-3  grid-cols-1 md:gap-y-8 xl:gap-0  md:grid-cols-2 lg:grid-cols-[50%_25%_23%]  xl:grid-cols-[33%_17%_17%_33%] 2xl:grid-cols-[30%_15%_15%_40%] pt-[50px] pb-14">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-bold">Axora</h1>
              <p className="text-md font-medium max-w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                eius facilis in corrupti mollitia harum veritatis et assumenda
                fuga, vel cumque excepturi, praesentium esse rem!
              </p>
              <div className="flex gap-3">
                <img
                  src={award}
                  className="bg-black p-2 w-[90px] h-[65px]"
                  alt=""
                />
                <img
                  src={award2}
                  className="bg-black p-2 w-[90px] h-[65px]"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-semibold">Services</h1>
              <ul className="flex flex-col gap-2">
                {services.map((service) => (
                  <li className="cursor-pointer font-medium text-md">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-semibold">Resources</h1>
              <ul className="flex flex-col gap-2">
                {resources.map((data) => (
                  <li className="cursor-pointer font-medium text-md">{data}</li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-6">Sign up For update</h1>
              <div className="flex border border-gray-300  rounded-xl mb-10">
                <input
                  type="text"
                  placeholder="Enter Your Email Address "
                  className="w-full border-none outline-none pl-3 py-4 "
                />
                <span className=" flex items-center justify-center px-4 text-xl">
                  <FaPaperPlane />
                </span>
              </div>
              <div>
                <h1 className="text-xl font-semibold mb-[25px]">Get App</h1>
                <div className="flex gap-3">
                  <img src={google} className="w-[100px] h-[30px]" alt="" />
                  <img src={app} className="w-[100px] h-[30px]" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex  text-sm md:text-[16px] flex-col md:flex-row justify-between items-center py-4 border-t border-gray-300">
            <p>©2025 All Right reversed by Marwan Mokhtar</p>
            <div className="flex gap-3">
              <span>Privacy</span>
              <span>Security</span>
              <span>Disclaimer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
