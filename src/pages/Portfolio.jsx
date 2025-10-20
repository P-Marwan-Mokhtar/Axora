import React from "react";
import pheader from "../assets/public/images/section/pheader-bg.webp";
import { IoIosArrowForward } from "react-icons/io";
import img1 from "../assets/public/images/protfolio/project-1.webp";
import img2 from "../assets/public/images/protfolio/project-2.webp";
import img3 from "../assets/public/images/protfolio/project-3.webp";
import img4 from "../assets/public/images/protfolio/project-4.webp";
import { Link } from "react-router-dom";
import AnimationPage from "../Components/AnimationPage";
const Portfolio = () => {
  const content = [
    {
      img: img1,
      jop: "Business",
      title: "Event Management Platform",
    },
    {
      img: img2,
      jop: "Content",
      title: "Digital Marketing Campaign",
    },
    {
      img: img3,
      jop: "Business",
      title: "Interactive Learning Platform",
    },
    {
      img: img4,
      jop: "Business",
      title: "Environmental Impact Dashboard",
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
          Home <IoIosArrowForward /> Portfolio
        </span>
      </div>
      <section>
        <div className="container">
          <AnimationPage>
            <div className="grid grid-rows-2 gap-7">
              <div className="grid   md:grid-cols-[60%_40%] xl:grid-cols-[70%_30%] gap-7">
                {content.slice(0, 2).map((data) => (
                  <Link to={"/portfolioDetails"}>
                    <div className="relative h-full group overflow-hidden rounded-xl cursor-pointer">
                      <img
                        src={data.img}
                        className="w-full h-full rounded-xl  group-hover:scale-105 transition-all duration-200"
                        alt=""
                      />
                      <div className="bg-black/40 group-hover:bg-black/60 transition-all duration-200 absolute w-full h-full top-0"></div>
                      <div className="absolute bottom-7 left-7 text-white flex flex-col gap-3">
                        <span className="text-md border border-white rounded-lg py-1 px-2 w-fit">
                          {data.jop}
                        </span>
                        <p className="  md:text-2xl lg:text-2xl font-semibold">{data.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="grid  md:grid-cols-[40%_60%] xl:grid-cols-[30%_70%] gap-7">
                {content.slice(2, 4).map((data) => (
                  <Link>
                    {" "}
                    <div className="relative group h-full overflow-hidden rounded-xl cursor-pointer">
                      <img
                        src={data.img}
                        className="w-full h-full rounded-xl group-hover:scale-105 transition-all duration-200"
                        alt=""
                      />
                      <div className="bg-black/40 group-hover:bg-black/60 transition-all duration-200 absolute w-full h-full top-0"></div>
                      <div className="absolute bottom-7 left-7 text-white flex flex-col gap-3">
                        <span className="text-md border border-white rounded-lg py-1 px-2 w-fit ">
                          {data.jop}
                        </span>
                        <p className="  md:text-2xl font-semibold">{data.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </AnimationPage>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
