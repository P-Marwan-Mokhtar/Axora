import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({
  sideBar,
  setSideBar,
  setShowLinks,
  setLocation,
  pages,
  showLinks,
}) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setSideBar(false);
  }, [pathname]);
  return (
    <ul
      className={` fixed   right-[-100%] opacity-0 invisible backdrop-blur-lg   transition-all duration-200 flex flex-col gap-[40px] top-0  xl:hidden   max-w-full w-[450px] h-[100vh] x p-8  rounded-l-3xl bg-[#0c1e1be9] ${
        sideBar ? "opacity-[1] visible  !right-0 " : ""
      }`}
    >
      <div className="flex justify-between xl:hidden  ">
        <h1 className="text-white text-[35px] font-semibold">Axora</h1>
        <span
          onClick={() => {
            setSideBar(false);
            setShowLinks(null);
          }}
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
            className="flex text-white  items-center gap-3 font-semibold cursor-pointer"
            key={page.link}
            onClick={() =>
              page.links && setShowLinks(showLinks == index ? null : index)
            }
          >
            <Link to={page.location} onClick={() => setLocation(location)}>
              {page.link}
            </Link>
            <span
              className={`transition-all duration-200  ${
                showLinks == index ? "rotate-[-180deg]" : "rotate-0"
              }`}
            >
              {page.icon}
            </span>
          </p>

          {Array.isArray(page.links) ? (
            <div
              className={`flex flex-col invisible opacity-0   h-0   top-[-10px]  transition-all duration-200  relative  font-semibold   rounded-xl  bg-white text-black w-[230px] ${
                index === showLinks &&
                "h-fit visible opacity-[1] !top-3 xl:h-fit xl:visible  xl:opacity-0 "
              }`}
            >
              {page.links.map((l) => (
                <Link
                  onClick={() => setShowLinks(null)}
                  to={`/${l.replace(" ", "")}`}
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
  );
};

export default SideBar;
