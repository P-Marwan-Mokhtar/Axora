import blog1 from "../assets/public/images/blog/blog-1.jpg";
import blog2 from "../assets/public/images/blog/blog-2.jpg";
import blog3 from "../assets/public/images/blog/blog-3.jpg";

import pheader from "../assets/public/images/section/pheader-bg.webp";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import post1 from "../assets/public/images/blog/service-1.webp";
import post2 from "../assets/public/images/blog/service-2.webp";
import post3 from "../assets/public/images/blog/service-3.webp";
import { Link } from "react-router-dom";
import AnimationPage from "../Components/AnimationPage";

const Blog = () => {
  return (
    <>
      <div className="relative ">
        <div className="w-full h-full   bg-gradient-to-r absolute from-[#00000061] to-[#00000061]"></div>
        <img
          src={pheader}
          className="w-full object-cover object-center h-[250px] sm:h-[350px]  md:h-[450px]  lg:h-[550px]  "
          alt=""
        />
        <span className="absolute bottom-7 text-white flex items-center gap-1.5 font-medium left-[100px]">
          Home <IoIosArrowForward /> Blog
        </span>
      </div>
      <section className="!bg-white">
        <div className="container">
          <AnimationPage>
            <div className=" grid  lg:grid-cols-[55%_45%] xl:pr-5 gap-7">
              <div className="flex flex-col gap-5">
                <Link to={"/blogDetails"}>
                  {" "}
                  <div className="bg-white cursor-pointer h-fit rounded-xl p-6 flex flex-col gap-5 border border-gray-400 group overflow-hidden">
                    <div className="relative mb-4">
                      <div className="h-full  rounded-xl flex overflow-hidden items-center justify-center">
                        <img
                          src={blog1}
                          className="rounded-xl w-full transition-all duration-200 group-hover:scale-110"
                          alt=""
                        />{" "}
                      </div>

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
                        Harnessing Digital Transform: A Roadmap For Business
                      </h2>
                      <p className="  md:text-xl max-w-[800px] text-gray-600 font-medium">
                        Discover how to leverage digital transformation to boost
                        efficiency and growth.
                      </p>
                    </div>
                    <div className=" w-fit justify-center cursor-pointer group flex items-center  gap-3 py-1.5 pl-4 pr-2 rounded-full w">
                      <span className="font-semibold">Read More</span>
                      <span className="rounded-full text-xl  text-white group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
                        <IoArrowForwardOutline />
                      </span>
                    </div>
                  </div>
                </Link>
                <Link to={"/blogDetails"}>
                  <div className="bg-white cursor-pointer h-fit rounded-xl p-6  border border-gray-400 group  gap-5">
                    <div className="relative mb-4 h-[350px] ">
                      <div className="h-full  rounded-xl flex overflow-hidden items-center justify-center">
                        <img
                          src={blog2}
                          className="w-full  h-[500px] group-hover:scale-110 transition-all duration-200"
                          alt=""
                        />
                      </div>
                      <div className=" backdrop-blur-xl absolute bg-gray-400/20 bottom-5 p-3 rounded-xl right-5">
                        <span className="text-white xl:text-2xl">14 Jun</span>
                      </div>
                    </div>

                    <div className="flex flex-col h-fit gap-5">
                      <div className=" ">
                        <p className="flex gap-2 font-semibold ">
                          {" "}
                          <span className="bg-white px-2 border mb-5 border-gray-300 rounded-md font-medium ">
                            Corporate
                          </span>
                          By Ellinien loma
                        </p>

                        <h2 className=" md:text-3xl font-semibold mb-7">
                          Mastering Change Management: Lessons For Businesses
                        </h2>
                        <p className=" md:text-md text-gray-600 ">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Fugit reiciendis harum, repellat inventore
                          tempore sequi!
                        </p>
                      </div>
                      <div className="  cursor-pointer group flex items-center  gap-3  rounded-full w">
                        <span className="font-semibold">Read More</span>
                        <span className="rounded-full text-xl text-white  group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
                          <IoArrowForwardOutline />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={"/blogDetails"}>
                  <div className="bg-white cursor-pointer h-fit rounded-xl p-6  border border-gray-400 group  gap-5">
                    <div className="relative mb-4 h-[350px] ">
                      <div className="h-full  rounded-xl flex overflow-hidden items-center justify-center">
                        <img
                          src={blog3}
                          className="w-full h-[350px]  group-hover:scale-110 transition-all duration-200"
                          alt=""
                        />
                      </div>
                      <div className=" backdrop-blur-xl absolute bg-gray-400/20 bottom-5 p-3 rounded-xl right-5">
                        <span className="text-white xl:text-2xl">14 Jun</span>
                      </div>
                    </div>

                    <div className="flex flex-col h-fit gap-5">
                      <div className=" ">
                        <p className="flex gap-2 font-semibold ">
                          {" "}
                          <span className="bg-white px-2 border mb-5 border-gray-300 rounded-md font-medium ">
                            Corporate
                          </span>
                          By Ellinien loma
                        </p>

                        <h2 className=" md:text-3xl font-semibold mb-7">
                          Mastering Change Management: Lessons For Businesses
                        </h2>
                        <p className=" md:text-md text-gray-600 ">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Fugit reiciendis harum, repellat inventore
                          tempore sequi!
                        </p>
                      </div>
                      <div className="  cursor-pointer group flex items-center  gap-3  rounded-full w">
                        <span className="font-semibold">Read More</span>
                        <span className="rounded-full text-xl text-white  group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
                          <IoArrowForwardOutline />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="relative flex flex-col gap-7">
                <div className="rounded-xl box-shadow p-5">
                  <h1 className="text-2xl font-semibold mb-5">Search here</h1>
                  <input
                    type="text"
                    className="border rounded-lg font-semibold outline-none border-gray-400 p-3 w-full"
                    placeholder="Search Here"
                  />
                </div>
                <div className="sticky top-[110px] flex flex-col gap-5 h-fit">
                  <div className="  rounded-xl box-shadow p-5  ">
                    <h1 className="text-2xl font-semibold mb-5">
                      Recent Posts
                    </h1>
                    <div className="flex flex-col gap-5">
                      <div className="grid md:grid-cols-2 items-center gap-5">
                        <img src={post1} className="rounded-xl" alt="" />
                        <div>
                          <h2 className="  xl:text-xl font-semibold mb-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                          </h2>
                          <p>01 OCT, 2025</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 items-center gap-5">
                        <img src={post2} className="rounded-xl" alt="" />
                        <div>
                          <h2 className="xl:text-xl font-semibold mb-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                          </h2>
                          <p>15 OCT, 2025</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 items-center gap-5">
                        <img src={post3} className="rounded-xl" alt="" />
                        <div>
                          <h2 className="xl:text-xl font-semibold mb-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                          </h2>
                          <p>21 OCT, 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="rounded-xl box-shadow p-5">
                    <h1 className="text-2xl font-semibold mb-5">Categories</h1>
                    <div className="flex flex-col gap-3">
                      <p className="flex items-center justify-between text-xl">
                        Business<span>(3)</span>
                      </p>
                      <p className="flex items-center justify-between text-xl">
                        Corporate<span>(4)</span>
                      </p>
                      <p className="flex items-center justify-between text-xl">
                        Designing<span>(2)</span>
                      </p>
                      <p className="flex items-center justify-between text-xl">
                        Innovation<span>(2)</span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-white box-shadow p-5 rounded-xl">
                    <h1 className="text-2xl font-semibold mb-5">Tags</h1>
                    <div className="flex flex-wrap gap-3 ">
                      <span className="tags">Branding</span>
                      <span className="tags">Business</span>
                      <span className="tags">Consuting</span>
                      <span className="tags">Design</span>
                      <span className="tags">Innovate</span>
                      <span className="tags">Lead</span>
                      <span className="tags">Marketing</span>
                    </div>
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

export default Blog;
