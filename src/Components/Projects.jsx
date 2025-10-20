import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import project1 from "../assets/public/images/projects/project-01.jpg";
import project2 from "../assets/public/images/projects/project-02.jpg";
import project3 from "../assets/public/images/projects/project-03.jpg";
import project4 from "../assets/public/images/projects/project-04.jpg";
import { IoArrowForwardOutline } from "react-icons/io5";
const Projects = () => {
  const imgs = [project1, project2, project3, project4];
  return (
    <section>
      <div>
        <div className="flex items-center flex-col mb-[50px]">
          {" "}
          <span className=" py-1 px-3 mb-5 bg-teal-950 text-white rounded-full flex items-center gap-1.5  w-fit">
            <span className="w-2 h-2 bg-white block rounded-full"></span>
            Our Projects
          </span>
          <p className="font-semibold text-xl text-center md:text-[35px]">
            Breaking Boundaries, Building Dreams.
          </p>
        </div>
        <div>
          <Swiper
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            speed={5000}
            spaceBetween={50}
            modules={[Autoplay]}
            slidesPerView={"auto"}
            className="mySwiper pointer-events-none "
          >
            {imgs.map((img) => (
              <SwiperSlide className="!flex justify-center px-[30px] xl:px-[50px] ">
                <div className="grid md:grid-cols-2  rounded-xl full h-full md:h-[450px] xl:h-full items-center gap-5 bg-white p-5">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      className="rounded-xl w-full h-full"
                      src={img}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="border-2 w-fit rounded-md px-1">
                      Innovation
                    </span>
                    <p className="text-2xl font-semibold">
                      AI-Powered Analytics Suite
                    </p>
                    <p className="text-gray-600 font-medium text-sm md:text-md max-w-[600px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis optio nam sit iure quas soluta culpa tenetur quos
                      eaque? Assumenda iure accusamus recusandae perspiciatis
                      deleniti.
                    </p>
                    <div className="bg-dark-cyan cursor-pointer group flex items-center text-white gap-3 py-1.5 pl-4 pr-2 rounded-full w-fit">
                      <span className="font-semibold">Learn more</span>
                      <span className="rounded-full  group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
                        <IoArrowForwardOutline />
                      </span>
                    </div>
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

export default Projects;
