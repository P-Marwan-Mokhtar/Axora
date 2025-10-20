import { IoIosArrowForward } from "react-icons/io";
import img from "../assets/public/images/faq/faq-image-01.webp";
import pheader from "../assets/public/images/section/pheader-bg.webp";
import { useState } from "react";
import AnimationPage from "../Components/AnimationPage";

const Faq = () => {
  const [showFaq, setShowFaq] = useState(0);
  return (
    <>
      {" "}
      <div className="relative">
        <div className="w-full h-full   bg-gradient-to-r absolute from-[#00000061] to-[#00000061]"></div>
        <img
          src={pheader}
          className="w-full  object-cover object-center h-[250px] sm:h-[350px]  md:h-[450px]  lg:h-[550px]  "
          alt=""
        />
        <span className="absolute bottom-7 text-white flex items-center gap-1.5 font-medium left-[100px]">
          Home <IoIosArrowForward /> FAQ
        </span>
      </div>
      <section className="!bg-white">
        <div className="container">
          <AnimationPage>
            <div className="grid   lg:grid-cols-2  gap-6">
              <div className="w-full md:h-[650px] overflow-hidden rounded-xl">
                <img src={img} className="rounded-xl w-full" alt="" />
              </div>
              <div>
                {["", "", "", "", "", ""].map((_, i) => (
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore laboriosam beatae dolore obcaecati alias, molestiae
                      ratione quis unde eaque fuga aliquam. Vel enim nihil earum
                      nulla est quos ea totam.
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="max-w-[1000px] mx-auto pt-[200px]">
              <div className="flex items-center flex-col md:mb-[50px]">
                {" "}
                <span className="   py-0.5 px-3 mb-5 bg-teal-950 text-white rounded-full flex items-center gap-1.5  w-fit">
                  <span className="w-2 h-2 bg-white block rounded-full"></span>
                  Common Question
                </span>
                <p className="text-2xl md:text-5xl [line-height:60px] font-medium mb-6">
                  Need Help? Start Here...
                </p>
              </div>
              <div>
                {["", "", "", "", "", ""].map((_, i) => (
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore laboriosam beatae dolore obcaecati alias, molestiae
                      ratione quis unde eaque fuga aliquam. Vel enim nihil earum
                      nulla est quos ea totam.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimationPage>
        </div>
      </section>
    </>
  );
};

export default Faq;
