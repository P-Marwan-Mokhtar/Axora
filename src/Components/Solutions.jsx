import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

import { FaGraduationCap, FaBriefcase, FaLeaf, FaUsers } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
const Solutions = () => {
  const breakpoints = {
    1500: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  };
  const solutions = [
    {
      title: "Training & Development",
      icon: <FaGraduationCap />,
      p: "Equip your teams with skills and knowledge tailored to your corporate goals",
    },
    {
      title: "Business Strategy",
      icon: <FaBriefcase />,
      p: "Develop actionable strategies to drive growth and stay ahead in your industry",
    },
    {
      title: "Sustainability & ESG",
      icon: <FaLeaf />,
      p: "implement strategies for long-team value, sustainability, and corporate responsibility",
    },
    {
      title: "Customer Engagement",
      icon: <FaUsers />,
      p: "Enhance customer journeys to boost satisfaction, loyalty, and long-term retention ",
    },
  ];
  return (
    <section className="bg-gray-200  font-sans" >
      <div className="container">
        <span className=" py-0.5 px-3 mb-4 bg-teal-950 text-white rounded-full flex items-center gap-1.5  w-fit">
          <span className="w-2 h-2 bg-white block rounded-full"></span>Our
          Solution
        </span>
        <div className="flex mb-[100px] flex-col md:flex-row  items-end justify-between md:items-center">
          <p className=" md:text-2xl xl:text-[35px] w-full md:w-auto text-start font-semibold">
            Tailor-Made Business Solutions For
            <br /> Modern Corporates
          </p>
          <div className="bg-dark-cyan flex items-center  gap-3 py-1.5 pl-4 pr-2  w-fit  md:w-[190px] rounded-full cursor-pointer group">
            <span className="text-sm md:text-[18px] text-white font-semibold tracking-wide">
              Explore More
            </span>
            <span className="rounded-full text-white md:text-xl bg-black p-1.5 group-hover:rotate-[-50deg] transition-all duration-200">
              <IoArrowForwardOutline />
            </span>
          </div>
        </div>
        <div>
          <Swiper
            navigation={true}
            breakpoints={breakpoints}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper "
          >
            {solutions.map((data, i) => (
              <SwiperSlide>
                {" "}
                <div
                  key={i}
                  className="bg-white group h-[450px] p-5 flex flex-col justify-between  shadow-xl hover:text-white hover:bg-teal-950 transition-all duration-200  rounded-lg"
                >
                  <h1 className="text-[25px]  font-semibold  ">{data.title}</h1>
                  <div className="flex justify-center">
                    <span className="w-[80px] h-[80px] group-hover:[transform:rotateY(180deg)]  [transform-style:preserve-3d]  transition-all duration-300 border bg-[linear-gradient(-60deg,_#095f5b6a,_transparent,_#095f5b6a)] border-cyan-900 rounded-full flex text-4xl items-center justify-center">
                      {data.icon}
                    </span>
                  </div>
                  <p className=" md:text-xl text-gray-500 group-hover:text-white font-medium">
                    {data.p}
                  </p>
                  <div className=" flex items-center gap-3 py-1.5 px-3 rounded-full cursor-pointer group">
                    <span className="text-[18px] text-teal-800 group-hover:text-white">
                      Learn More
                    </span>
                    <span className="rounded-full text-xl text-white group-hover:bg-white group-hover:text-teal-950 bg-teal-950  p-1.5 group-hover:rotate-[-50deg] transition-all duration-200">
                      <IoArrowForwardOutline />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
