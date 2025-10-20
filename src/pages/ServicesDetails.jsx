import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import pheader from "../assets/public/images/section/pheader-bg.webp";
import img1 from "../assets/public/images/servicedetails/service-01.webp";
import img2 from "../assets/public/images/servicedetails/service-02.webp";
import { FaCheckCircle } from "react-icons/fa";
import AnimationPage from "../Components/AnimationPage";
const ServicesDetails = () => {
  const [showFaq, setShowFaq] = useState(0);

  return (
    <>
      <div className="relative">
        <div className="w-full h-full   bg-gradient-to-r absolute from-[#00000061] to-[#00000061]"></div>
        <img
          src={pheader}
          className="w-full object-center object-cover  h-[250px] sm:h-[350px]  md:h-[450px]  lg:h-[500px]  "
          alt=""
        />
        <span className="absolute bottom-7 text-white flex items-center gap-1.5 font-medium left-[100px]">
          Home <IoIosArrowForward /> Contact
        </span>
      </div>
      <section className="!bg-white">
        <div className="container">
          <div>
            <AnimationPage>
              <div className="grid relative  lg:grid-cols-2 gap-9">
                <div>
                  <div className="h-[450px] rounded-xl flex flex-col justify-center overflow-hidden mb-7">
                    <img src={img1} alt="" className="w-full rounded-xl" />
                  </div>
                  <div>
                    <h1 className="text-xl  md:text-2xl xl:text-4xl font-semibold mb-8">
                      TRAINING AND DEVELOPMENT PROGRAMS
                    </h1>
                    <p className=" md:text-md text-gray-600 mb-9">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Suscipit iste atque delectus dolores rem commodi, tenetur
                      ratione molestiae dicta nihil animi! Eaque odio id aliquid
                      eius eum aliquam ab commodi. Placeat ratione soluta
                      cupiditate quod commodi quasi porro quos id corporis iusto
                      eius sequi, ex optio accusantium eaque. Deserunt eum at
                      quia fuga beatae animi laborum perferendis recusandae iure
                      ut?
                    </p>
                    <p className="md:text-md text-gray-600 mb-9">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reiciendis similique dolorem, nisi delectus repellat
                      commodi cum tenetur voluptatum ratione nemo perferendis
                      nesciunt dolorum? Fugiat assumenda natus dolores sunt
                      iusto odit, delectus molestias et magni voluptatum?
                      Explicabo iure aliquam sint quae.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5 mb-8">
                    <div className="flex flex-col justify-between gap-5">
                      <div className="flex gap-3 flex-col">
                        <p className="flex items-center gap-2 xl:text-md">
                          <span className="   xl:text-xl">
                            <FaCheckCircle />
                          </span>{" "}
                          Personalization At Scale
                        </p>
                        <p className="flex items-center gap-2 xl:text-md">
                          <span className="xl:text-2xl">
                            <FaCheckCircle />
                          </span>{" "}
                          Improved Customer Retention
                        </p>
                        <p className="flex items-center gap-2 xl:text-md">
                          <span className="xl:text-2xl">
                            <FaCheckCircle />
                          </span>{" "}
                          Data-Driven Insights
                        </p>
                        <p className="flex items-center gap-2 xl:text-md">
                          <span className="xl:text-2xl">
                            <FaCheckCircle />
                          </span>{" "}
                          Omni-channel Integration
                        </p>
                      </div>
                      <div className="  ">
                        <img src={img1} alt="" className="rounded-xl" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between gap-5 ">
                      <div className="flex gap-3 flex-col">
                        <p className="flex items-center gap-2 xl:text-md">
                          <span className="xl:text-2xl">
                            <FaCheckCircle />
                          </span>{" "}
                          Personalization At Scale
                        </p>
                        <p className="flex items-center gap-2 xl:text-md">
                          <span className="xl:text-2xl">
                            <FaCheckCircle />
                          </span>{" "}
                          Improved Customer Retention
                        </p>
                        <p className="flex items-center gap-2 xl:text-md">
                          <span className="  xl:text-2xl">
                            <FaCheckCircle />
                          </span>{" "}
                          Data-Driven Insights
                        </p>
                      </div>
                      <div className="  ">
                        <img src={img2} alt="" className="rounded-xl" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-10">
                    <h1 className="text-2xl xl:text-4xl font-semibold mb-7">
                      Our Range Of Customer Service
                    </h1>
                    <p className=" xl:text-md text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum molestiae, molestias quam eum accusamus suscipit,
                      exercitationem quis placeat consequuntur possimus omnis
                      autem perferendis, amet rerum deserunt porro. Cum, vel at
                      fuga assumenda, incidunt cumque blanditiis autem facere
                      eaque, atque qui sit laborum quae odio debitis accusamus
                      amet magnam laudantium nulla.
                    </p>
                  </div>
                  <div>
                    {["", "", "", "", ""].map((_, i) => (
                      <div key={i} className="text-white h-auto mb-3">
                        <div
                          onClick={() => setShowFaq(showFaq === i ? null : i)}
                          className={`flex items-center justify-between border border-gray-300   text-black p-5  cursor-pointer ${
                            showFaq == i
                              ? "bg-[#011f16] border-none text-white rounded-t-md"
                              : "bg-white rounded-md"
                          }`}
                        >
                          <p
                            className={` text-[12px] md:text-[16px] w-full font-semibold `}
                          >
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit?
                          </p>{" "}
                          <span
                            className={`text-2xl text-black ${
                              showFaq == i ? "text-white" : ""
                            }`}
                          >
                            {i === showFaq ? "-" : "+"}
                          </span>
                        </div>
                        <p
                          className={` text-sm md:text-md overflow-hidden transition-all duration-300 text-gray-300  border-t-2 border-teal-800  bg-teal-950 rounded-b-md ${
                            showFaq === i
                              ? "max-h-[500px] opacity-100 p-5"
                              : "max-h-0 opacity-0 p-0"
                          }`}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Labore laboriosam beatae dolore obcaecati alias,
                          molestiae ratione quis unde eaque fuga aliquam. Vel
                          enim nihil earum nulla est quos ea totam.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={` lg:sticky top-[110px] h-fit flex flex-col gap-10`}
                >
                  <div className="bg-white rounded-xl box-shadow p-5 flex flex-col gap-4 ">
                    <h1 className="text-2xl font-semibold">More Services</h1>
                    <p className="p-services">
                      Lorem ipsum dolor sit, amet consectetur.
                      <span>
                        <IoIosArrowForward />
                      </span>
                    </p>
                    <p className="p-services">
                      Lorem ipsum dolor sit, amet consectetur.
                      <span>
                        <IoIosArrowForward />
                      </span>
                    </p>
                    <p className="p-services">
                      Lorem ipsum dolor sit, amet consectetur.{" "}
                      <span>
                        <IoIosArrowForward />
                      </span>
                    </p>
                    <p className="p-services">
                      Lorem ipsum dolor sit, amet consectetur.{" "}
                      <span>
                        <IoIosArrowForward />
                      </span>
                    </p>
                    <p className="p-services">
                      Lorem ipsum dolor sit, amet consectetur.{" "}
                      <span>
                        <IoIosArrowForward />
                      </span>
                    </p>
                    <p className="p-services">
                      Lorem ipsum dolor sit, amet consectetur.{" "}
                      <span>
                        <IoIosArrowForward />
                      </span>
                    </p>
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
            </AnimationPage>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetails;
