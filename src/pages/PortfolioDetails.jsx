import React from "react";
import pheader from "../assets/public/images/section/pheader-bg.webp";
import { IoIosArrowForward } from "react-icons/io";
import img1 from "../assets/public/images/protfolio/project-1.webp";
import img2 from "../assets/public/images/protfoliodetails/project-gallery-1.webp";
import img3 from "../assets/public/images/protfoliodetails/project-gallery-2.webp";
import img4 from "../assets/public/images/protfoliodetails/project-gallery-3.webp";
import { IoMdPersonAdd } from "react-icons/io";
import AnimationPage from "../Components/AnimationPage";
const PortfolioDetails = () => {
  const projectInfo = [
    {
      icon: <IoMdPersonAdd />,
      info: "Clients",
      title: "Innovate Interiors Group ",
    },
    {
      icon: <IoMdPersonAdd />,
      info: "Budget",
      title: "$100m USD",
    },
    {
      icon: <IoMdPersonAdd />,
      info: "Location",
      title: "Moplewood Heights, CA",
    },
    {
      icon: <IoMdPersonAdd />,
      info: "Sector",
      title: "Corporate Business",
    },
    {
      icon: <IoMdPersonAdd />,
      info: "Complete data",
      title: "Jul 20, 2025",
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
          Home <IoIosArrowForward /> PortfolioDetails
        </span>
      </div>
      <section className="!pt-10 !bg-white">
        <div className="container">
         <AnimationPage>
            <div className=" grid  lg:grid-cols-2 xl:grid-cols-[60%_40%] relative gap-10">
              <div>
                <div className="">
                  <img src={img1} className="rounded-xl" alt="" />
                </div>
                <div className="flex flex-col gap-7 mt-7">
                  {[
                    "EVENT MANAGEMENT PLATFORM",
                    "Project Overview",
                    "Project Gallery",
                  ].map((h1, i) => (
                    <div key={i}>
                      {" "}
                      <h1 className=" text-2xl xl:text-4xl font-semibold mb-5">{h1}</h1>
                      <p className=" md:text-md text-gray-600 max-w-[900px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus vel consequatur laborum repellat vero
                        nesciunt, cupiditate tempora, quidem, nam itaque
                        architecto mollitia debitis eligendi amet fugiat unde.
                        Vel, ducimus voluptates.
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid gap-4  md:gap-8 pt-[70px]">
                  <img src={img2} className="rounded-xl w-full" alt="" />
                  <div className="grid grid-cols-2 gap-4 md:gap-8">
                    <img src={img3} className="rounded-xl w-full" alt="" />
                    <img src={img4} className="rounded-xl w-full" alt="" />
                  </div>
                </div>
              </div>
              <div className="sticky top-[110px] flex flex-col gap-10 h-fit">
                <div className="bg-white  box-shadow p-5  rounded-lg">
                  <h1 className="text-3xl font-semibold mb-5">Project Info</h1>
                  <div className="flex flex-col gap-5">
                    {projectInfo.map((data) => (
                      <div className="flex items-center gap-4 ">
                        <span className="w-[30px] h-[30px]  md:w-[50px] md:h-[50px] bg-teal-700 flex items-center justify-center text-white rounded-full md:text-2xl">
                          {data.icon}
                        </span>
                        <div>
                          <span className="text-gray-500 md:text-md font-medium">
                            {data.info}
                          </span>
                          <h3 className="  md:text-xl font-semibold">
                            {data.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white box-shadow p-5 rounded-xl">
                  <h1 className="text-2xl font-semibold mb-5">Tags</h1>
                  <div className="flex flex-wrap gap-3 ">
                    <span className="tags">Design</span>
                    <span className="tags">Branding</span>
                    <span className="tags">UI/UX</span>
                    <span className="tags">Development</span>
                    <span className="tags">Creative</span>
                    <span className="tags">Marketing</span>
                  </div>
                </div>
              </div>
            </div>
            </AnimationPage>
          </div>
        
      </section>
    </>
  );
};

export default PortfolioDetails;
