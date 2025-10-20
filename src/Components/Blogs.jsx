import React from "react";
import blog1 from "../assets/public/images/blog/blog-1.jpg";
import blog2 from "../assets/public/images/blog/blog-2.jpg";
import blog3 from "../assets/public/images/blog/blog-3.jpg";
import { IoArrowForwardOutline } from "react-icons/io5";
const Blogs = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div className="flex items-center flex-col mb-[50px]">
            <span className=" py-1 px-3 mb-5 bg-teal-950 text-white rounded-full flex items-center gap-1.5  w-fit">
              <span className="w-2 h-2 bg-white block rounded-full"></span>
              Our Blogs
            </span>
            <p className="font-semibold text-[35px]">
              Strategies And Insights.
            </p>
          </div>

          <div className="grid   xl:grid-cols-2  gap-5">
            <div className="bg-white h-fit rounded-xl p-6 flex flex-col gap-5 group overflow-hidden">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={blog1}
                  className="rounded-xl w-full h-[300px] md:h-[400px] transition-all duration-200 group-hover:scale-110"
                  alt=""
                />{" "}
                <div className=" backdrop-blur-xl absolute bg-gray-400/20 bottom-5 p-3 rounded-xl right-5">
                  <span className="text-white text-2xl">18 jun</span>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <p className="flex gap-2 font-semibold">
                  {" "}
                  <span className="bg-white px-2 border border-gray-300 rounded-md font-medium ">
                    Business
                  </span>
                  By Ellinien loma
                </p>
                <h2 className=" md:text-3xl font-semibold ">
                  Harnessing Digital Transform: A<br /> Roadmap For Business
                </h2>
                <p className="  md:text-xl max-w-[600px] text-gray-600 font-medium">
                  Discover how to leverage digital transformation to boost
                  efficiency and growth
                </p>
              </div>
              <div className="bg-dark-cyan w-full justify-center cursor-pointer group flex items-center text-white gap-3 py-1.5 pl-4 pr-2 rounded-full w">
                <span className="font-semibold">Choose Package</span>
                <span className="rounded-full text-xl  group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
                  <IoArrowForwardOutline />
                </span>
              </div>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-1 h-full justify-between gap-5">
              <div className="bg-white h-fit rounded-xl p-6 flex flex-col xl:flex-row group  gap-5">
                <div className="relative rounded-xl h-[300px] xl:w-[80%] 2xl:w-[400px] overflow-hidden">
                  <img
                    src={blog2}
                    className=" w-full h-full group-hover:scale-110 transition-all duration-200"
                    alt=""
                  />
                  <div className=" backdrop-blur-xl absolute bg-gray-400/20 bottom-5 p-3 rounded-xl right-5">
                    <span className="text-white xl:text-2xl">01 Oct, 2025</span>
                  </div>
                </div>

                <div className="flex flex-col h-fit gap-5">
                  <div className="">
                    <p className="flex gap-2 font-semibold mb-5">
                      {" "}
                      <span className="bg-white px-2 border border-gray-300 rounded-md font-medium ">
                        Business
                      </span>
                      By Ellinien loma
                    </p>

                    <h2 className="text-2xl font-semibold ">
                      Harnessing Digital Transform: A Roadmap For Business
                    </h2>
                  </div>
                  <div className="  cursor-pointer group flex items-center  gap-3  rounded-full w">
                    <span className="font-semibold">Read More</span>
                    <span className="rounded-full text-xl text-white  group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
                      <IoArrowForwardOutline />
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white h-fit max-w-full rounded-xl p-6 group flex flex-col xl:flex-row relative gap-5">
                <div className="relative  overflow-hidden rounded-xl">
                  {" "}
                  <img
                    src={blog3}
                    className=" h-[300px] w-full  group-hover:scale-110 transition-all duration-200"
                    alt=""
                  />
                  <div className=" backdrop-blur-2xl absolute bg-gray-400/20 bottom-5 p-3 rounded-xl right-5">
                    <span className="text-white text-2xl">14 jun</span>
                  </div>
                </div>
                <div className=" flex flex-col h-fit gap-5 ">
                  <div className=" flex flex-col gap-5 ">
                    <p className="flex gap-2 font-semibold">
                      <span className="bg-white px-2 border border-gray-300 rounded-md font-medium ">
                        Business
                      </span>{" "}
                      By Ellinien loma
                    </p>

                    <h2 className="text-2xl font-semibold ">
                      Harnessing Digital Transform: A Roadmap For Business
                    </h2>
                  </div>
                  <div className="   cursor-pointer group flex items-center  gap-3 rounded-full w">
                    <span className="font-semibold">Read More</span>
                    <span className="rounded-full text-xl  text-white group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
                      <IoArrowForwardOutline />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
