import React from "react";
import crew1 from "../assets/public/images/team/team-1.webp";
import crew2 from "../assets/public/images/team/team-2.webp";
import crew3 from "../assets/public/images/team/team-3.webp";
import crew4 from "../assets/public/images/team/team-4.webp";

import { IoLogoFacebook } from "react-icons/io";
import { FaSquareTwitter, FaSquareYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  const crew = [
    {
      img: crew1,
      name: "Eade Marren",
      job: "Chief Executive",
    },
    {
      img: crew2,
      name: "Savannah Nguyen",
      job: "Operations Head",
    },
    {
      img: crew3,
      name: "Kristin Watson",
      job: "Marketing Lead",
    },
    {
      img: crew4,
      name: "Darlene Robertson",
      job: "Business Director",
    },
  ];
  return (
    <section>
      <div className="container">
        <div>
          <div className="flex items-center justify-center flex-col px-2 mb-[100px]">
            <span className=" py-0.5 px-3 mb-4 bg-teal-950 text-white rounded-full flex items-center gap-1.5  w-fit">
              <span className="w-2 h-2 bg-white  block rounded-full"></span>Meet
              Our Team
            </span>
            <h1 className=" text-xm md:text-4xl font-semibold">
              Meet Our Team Success Stories Fuel Out Innovation
            </h1>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
            {crew.map((data) => (
              <div>
                <div className="relative group">
                  <img
                    src={data.img}
                    className="rounded-xl mb-3 bg-white w-full"
                    alt=""
                  />
                  <div className="bg-[#0000007c] opacity-0 group-hover:opacity-[1] invisible group-hover:visible transition-all duration-200 flex items-center justify-center w-full h-full top-0  absolute rounded-xl">
                    <div className="flex gap-3 text-white">
                      <span className="text-3xl cursor-pointer">
                        <IoLogoFacebook />
                      </span>
                      <span className="text-3xl cursor-pointer">
                        <FaSquareTwitter />
                      </span>
                      <span className="text-3xl cursor-pointer">
                        <FaLinkedin />
                      </span>
                      <span className="text-3xl cursor-pointer">
                        <FaSquareYoutube />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold">{data.name}</h2>
                    <p>{data.job}</p>
                  </div>
                  <span className="w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full">
                    @
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
