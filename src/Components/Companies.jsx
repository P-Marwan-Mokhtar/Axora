import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import company from "../assets/public/images/companies/brand-1.webp";
import company2 from "../assets/public/images/companies/brand-2.webp";
import company3 from "../assets/public/images/companies/brand-3.webp";
import company4 from "../assets/public/images/companies/brand-4.webp";
import company5 from "../assets/public/images/companies/brand-5.webp";
import { Autoplay } from "swiper/modules";
const Companies = () => {
  let imgs = [company, company2, company3, company4, company5];

  return (
    <section  className="  px-5 bg-gray-200 ">
      <div>
        <div className="flex items-center justify-center flex-col px-2 mb-[100px]">
          <span className=" py-0.5 px-3 mb-4 bg-teal-950 text-white rounded-full flex items-center gap-1.5  w-fit">
            <span className="w-2 h-2 bg-white  block rounded-full"></span>Our
            Partners
          </span>
          <h1 className=" text-xm md:text-4xl font-semibold">
            Join Over{" "}
            <span className="bg-dark-cyan py-1 md:py-2 text-white rounded-lg px-3 ">
              1000+
            </span>{" "}
            Companies With Bexon Here
          </h1>
        </div>
        <div>
          <Swiper
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              850: {
                slidesPerView: 3,
              },
              500: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            speed={3000}
            modules={[Autoplay]}
            className="mySwiper pointer-events-none"
          >
            {imgs.map((img) => (
              <SwiperSlide>
                <div className="bg-white h-[100px] mx-[20px] p-5 flex items-center justify-center rounded-2xl">
                  <img src={img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Companies;
