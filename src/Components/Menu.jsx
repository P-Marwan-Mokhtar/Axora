import React from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`fixed menu opacity-0 hidden xl:flex right-[-100px] invisible transition-all duration-200  flex-col gap-[40px] top-0  w-[500px] h-full p-8  backdrop-blur-md rounded-l-3xl bg-[#0c1e1be9] ${
        showMenu ? "opacity-[1] visible !right-0 " : ""
      }`}
    >
      <div className="flex items-center justify-between ">
        <h1 className="text-white text-[35px] font-semibold">Axora</h1>
        <span
          onClick={() => setShowMenu(false)}
          className=" group  cursor-pointer  p-2 w-fit text-[30px] flex items-center justify-center bg-white rounded-md"
        >
          <span className="group-hover:rotate-90 transition-all duration-200">
            <IoMdClose />
          </span>
        </span>
      </div>
      <p className=" text-gray-300 text-[18px]  ">
        we are committed to delivering innovative solutions that drive growth
        and add value to our clients. with a team of experienced professionals
        and a passion for excellence.{" "}
      </p>
      <div className="flex flex-col gap-3">
        <h1 className="text-[30px] font-semibold text-white">Search Now!</h1>
        <div className="w-full flex ">
          <input
            type="text"
            placeholder="Search Here..."
            className="w-full text-lg rounded-l-md pl-5 py-3 border-none outline-none bg-white"
          />
          <span className="text-xl bg-white  rounded-r-md border-l border-gray-300 flex items-center justify-center px-4">
            <IoSearchOutline />
          </span>
        </div>
      </div>
      <div className=" flex flex-col gap-5 ">
        <h1 className=" text-3xl text-white">Contact Info</h1>
        <p className=" text-gray-400 font-medium flex flex-col ">
          Phone
          <span className="text-[20px] text-white">+201295671230</span>
        </p>
        <p className=" flex flex-col  text-gray-400 font-medium">
          Email
          <span className="text-[20px] text-white">Info@axora.com</span>
        </p>
        <p className=" flex flex-col  text-gray-400 font-medium">
          Location
          <span className=" text-[20px] text-white">
            Cairo, Cairo Governorate
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl text-white">Follow Us</h1>
        <ul className="flex gap-5">
          <li className="bg-blue-600 menu-i">
            <FaFacebookF />
          </li>
          <li className="bg-[#eb338f] menu-i">
            <FaInstagram />
          </li>
          <li className="bg-red-600 menu-i">
            <FaYoutube />
          </li>
          <li className="bg-blue-500 menu-i">
            <FaLinkedinIn />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
