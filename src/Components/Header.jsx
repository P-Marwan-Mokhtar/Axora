import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { RiMenuLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import Menu from "./Menu";
import SideBar from "./SideBar";
const Header = () => {
  const pages = [
    { link: "Home", location: "/" },
    {
      link: "Pages",
      icon: <IoIosArrowDown />,
      links: ["About Us", "Team", "FAQ", "Contact"],
    },
    {
      link: "Services",
      icon: <IoIosArrowDown />,
      links: ["Services List", "Services Details"],
    },
    {
      link: "Portfolio",
      icon: <IoIosArrowDown />,
      links: ["Portfolio", "Portfolio Details"],
    },
    {
      link: "Blog",
      icon: <IoIosArrowDown />,
      links: ["Blog", "Blog Details"],
    },
    { link: "Contact", location: "/contact" },
  ];
  const [location, setLocation] = useState("/");
  const [showMenu, setShowMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [showLinks, setShowLinks] = useState(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 400) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });
  return (
    <header className="  px-10 pt-3 fixed w-full z-20 ">
      <div
        className={` backdrop-blur-lg transition-all duration-200 bg-[#ededed21] px-[20px] md:px-[80px] py-5 rounded-2xl ${
          isScroll ? "!bg-[#171818d3]" : ""
        }`}
      >
        <div className="flex justify-between items-center text-white">
          <Link to={"/"}>
            <h1 className="text-[30px] font-bold">Axora</h1>
          </Link>

          <ul className={`  hidden  gap-[40px]  xl:flex `}>
            <div className="flex justify-between xl:hidden  ">
              <h1 className="text-white text-[35px] font-semibold">Axora</h1>
              <span
                onClick={() => setShowMenu(false) || setSideBar(false)}
                className=" group  cursor-pointer p-2 w-fit text-[30px] flex items-center justify-center bg-white rounded-md"
              >
                <span className="group-hover:rotate-90 transition-all duration-200 text-black">
                  <IoMdClose />
                </span>
              </span>
            </div>
            {pages.map((page, index) => (
              <div className="relative group w-fit">
                <p
                  className="flex  items-center gap-3 font-semibold cursor-pointer"
                  key={page.link}
                  onClick={() => (page.links ? setShowLinks(index) : "")}
                >
                  <Link
                    to={page.location}
                    onClick={() => setLocation(location)}
                  >
                    {page.link}
                  </Link>
                  <span>{page.icon}</span>
                </p>

                {Array.isArray(page.links) ? (
                  <div
                    className={`flex flex-col  opacity-0   h-0  xl:group-hover:opacity-[1] top-3 xl:top-11 transition-all duration-200  xl:group-hover:top-11 xl:h-fit relative xl:absolute font-semibold   rounded-xl  bg-white text-black w-[230px] ${
                      index === showLinks
                        ? "h-fit  opacity-[1] xl:h-fit xl:opacity-0 "
                        : ""
                    }`}
                  >
                    {page.links.map((l) => (
                      <Link
                        to={`/${l.replace(" ", "").toLowerCase()}`}
                        className={`px-3 py-2 hover:bg-dark-cyan hover:text-white last:rounded-b-xl first:rounded-t-xl  transition-all duration-200  w-full`}
                      >
                        {l}
                      </Link>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <div className="bg-dark-cyan hidden md:flex items-center gap-3 py-1.5 px-3 rounded-full cursor-pointer group">
              <span className="text-[18px]">Let's Talk</span>
              <span className="rounded-full text-xl bg-black p-1.5 group-hover:rotate-[-50deg] transition-all duration-200">
                <IoArrowForwardOutline />
              </span>
            </div>
            <div
              onClick={() => setShowMenu(true) || setSideBar(true)}
              className="text-[35px] flex gap-1.5 flex-col cursor-pointer group"
            >
              <span className="w-6 h-[3px] bg-white block rounded-2xl "></span>
              <span
                className={`w-3.5 h-[3px] bg-white block rounded-2xl transition-all duration-200 group-hover:w-6 `}
              ></span>
              <span className="w-6 h-[3px] bg-white block rounded-2xl"></span>
            </div>
          </div>
        </div>
      </div>
      <SideBar
        pages={pages}
        sideBar={sideBar}
        setSideBar={setSideBar}
        setShowLinks={setShowLinks}
        setLocation={setLocation}
        showLinks={showLinks}
      />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

export default Header;
