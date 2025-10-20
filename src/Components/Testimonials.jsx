import React from "react";
import comment from "../assets/public/images/testimonials/user.jpg";
import comment2 from "../assets/public/images/testimonials/user2.jpg";
import comment3 from "../assets/public/images/testimonials/user3.jpg";
import client from "../assets/public/images/testimonials/testimonial-img.jpg";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { TbQuoteFilled } from "react-icons/tb";
const Testimonials = () => {
  const imgs = [comment3, comment2, comment];
  return (
    <section>
      <div className="container">
        <div className="grid  lg:grid-cols-2 gap-8 max-w-full">
          <div className="relative ">
            <img src={client} className="h-full rounded-2xl " alt="" />
            <div className="absolute bottom-5 right-5 bg-dark-cyan rounded-xl p-2">
              <span className=" text-xl md:text-[50px]  text-white">4.9</span>
              <ul className="flex gap-1.5 md:gap-3 mb-1 md:mb-2">
                {["", "", "", "", ""].map((_, i) => (
                  <li key={i} className="text-yellow-400">
                    {<FaStar />}
                  </li>
                ))}
              </ul>
              <p className="text-white text-sm">(50+ clients Reviews)</p>
            </div>
          </div>

          <Swiper
            loop={true}
            spaceBetween={30}
            slidesPerView={"auto"}
            className="mySwiper !max-w-full "
          >
            {imgs.map((img) => (
              <SwiperSlide className="">
                <div className="bg-white h-full p-8 max-w-full flex flex-col justify-between gap-3 rounded-2xl">
                  <span className="text-[70px] md:text-[100px] text-dark-cyan">
                    <TbQuoteFilled />
                  </span>
                  <p className="   md:text-xl/relaxed text-gray-600 text-sm ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Exercitationem, corporis veniam quae doloribus et ratione
                    aut rerum, impedit, consectetur expedita porro distinctio
                    molestias maxime inventore fuga minus. Architecto id et
                    assumenda rem totam magni harum rerum doloremque beatae
                    voluptates minima blanditiis quas, sapiente alias debitis
                    laboriosam itaque molestias nam! Quibusdam!
                  </p>
                  <div className="flex items-center gap-5 pt-5 border-dotted border-t-2 border-gray-300 ">
                    <img
                      src={img}
                      className="w-[50px] h-[50px] rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col  ">
                      <h2 className="text-xl font-semibold">Ralph Edwards</h2>
                      <p className="text-gray-400 ">Co. Founder</p>
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

export default Testimonials;
