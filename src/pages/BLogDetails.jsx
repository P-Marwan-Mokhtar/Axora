import { IoIosArrowForward } from "react-icons/io";
import pheader from "../assets/public/images/section/pheader-bg.webp";
import blog1 from "../assets/public/images/blog/blog-1.jpg";
import post1 from "../assets/public/images/blog/service-1.webp";
import post2 from "../assets/public/images/blog/service-2.webp";
import post3 from "../assets/public/images/blog/service-3.webp";
import bd1 from "../assets/public/images/blogdetails/blog-1.webp";
import bd2 from "../assets/public/images/blogdetails/blog-2.webp";
import { TbQuote } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";
import AnimationPage from "../Components/AnimationPage";
const BLogDetails = () => {
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
          Home <IoIosArrowForward /> Contact
        </span>
      </div>
      <section className="!bg-white">
        <div className="container">
          <AnimationPage>
            <div className="grid grid-cols-[55%_45%] gap-7">
              <div>
                <div className="h-[450px] rounded-xl overflow-hidden mb-8">
                  <img src={blog1} className="rounded-xl" alt="" />
                </div>
                <h1 className="text-4xl font-semibold mb-5">
                  HARNESSING DIGITAL TRANSFORM: A ROADMAP FOR BUSINESSES
                </h1>
                <p className="text-md text-gray-600 mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, eum modi necessitatibus enim laudantium expedita
                  reprehenderit saepe architecto eveniet, dolorum reiciendis aut
                  ducimus aspernatur iusto nam doloribus eius placeat et
                  mollitia voluptate atque labore distinctio ea facere. Tempora
                  obcaecati optio deserunt, corporis perspiciatis iusto sequi
                  pariatur quibusdam reprehenderit eligendi facilis quod iure
                  doloremque, autem dolor omnis hic beatae saepe quas, at esse!
                  Voluptatem quisquam error, temporibus non eius beatae iste.
                </p>
                <p className="text-md text-gray-600 mb-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Saepe fugiat natus dignissimos dolore accusamus enim
                  asperiores dolores iure iusto perspiciatis, tenetur ullam
                  eaque architecto hic, ipsa animi tempore rerum ab optio
                  consequatur blanditiis aliquid non temporibus? Autem doloribus
                  quas soluta!
                </p>
                <div className="bg-gray-300 p-5 flex flex-col gap-5 rounded-lg mb-5">
                  <span className="text-7xl">
                    <TbQuote />
                  </span>
                  <p className="font-semibold text-xl ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error quibusdam odit molestiae iusto possimus at
                    necessitatibus cumque. Earum, nam. Nesciunt, sit eaque.
                    Minima pariatur aliquam, consectetur impedit velit officia.
                    Rem!
                  </p>
                  <p className="flex justify-end text-xl font-bold ">
                    - Kevin Hooks
                  </p>
                </div>
                <h1 className="text-3xl mb-5 font-semibold">
                  Kye Lessons Of Business Potenial
                </h1>
                <p className="text-md text-gray-700 mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nobis autem, incidunt id qui quae veniam sed. Amet, commodi
                  reprehenderit minima ea dolorem at, inventore ab similique vel
                  nobis quisquam earum, cumque quibusdam! Explicabo tenetur
                  maxime maiores provident recusandae expedita, possimus modi
                  ullam facilis, ipsum temporibus dolorem pariatur nobis
                  laborum.
                </p>
                <div className="grid grid-cols-2 gap-5 mb-8">
                  <img src={bd1} className="rounded-lg" alt="" />
                  <img src={bd2} className="rounded-lg" alt="" />
                </div>
                <p className="text-md text-gray-700 mb-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eius, optio. Rerum culpa ea praesentium itaque quaerat
                  perspiciatis illum inventore modi delectus, ad labore
                  aspernatur veniam perferendis, consequuntur doloribus sint
                  cumque adipisci eveniet et. Soluta fuga unde tenetur amet
                  aliquid? Esse!
                </p>
                <div className="grid grid-cols-2 mb-8">
                  <div className="flex gap-3 flex-col">
                    <p className="flex items-center gap-2 text-md">
                      <span className="text-2xl">
                        <FaCheckCircle />
                      </span>{" "}
                      Personalization At Scale
                    </p>
                    <p className="flex items-center gap-2 text-md">
                      <span className="text-2xl">
                        <FaCheckCircle />
                      </span>{" "}
                      Improved Customer Retention
                    </p>
                    <p className="flex items-center gap-2 text-md">
                      <span className="text-2xl">
                        <FaCheckCircle />
                      </span>{" "}
                      Data-Driven Insights
                    </p>
                    <p className="flex items-center gap-2 text-md">
                      <span className="text-2xl">
                        <FaCheckCircle />
                      </span>{" "}
                      Omni-channel Integration
                    </p>
                  </div>
                  <div className="flex gap-3 flex-col">
                    <p className="flex items-center gap-2 text-md">
                      <span className="text-2xl">
                        <FaCheckCircle />
                      </span>{" "}
                      Personalization At Scale
                    </p>
                    <p className="flex items-center gap-2 text-md">
                      <span className="text-2xl">
                        <FaCheckCircle />
                      </span>{" "}
                      Improved Customer Retention
                    </p>
                    <p className="flex items-center gap-2 text-md">
                      <span className="text-2xl">
                        <FaCheckCircle />
                      </span>{" "}
                      Data-Driven Insights
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-semibold mb-5  ">
                    Leave A Comment
                  </h1>
                  <p className="text-md text-gray-300 mb-3">
                    Your email address will not be published Requird fields ara
                    market *
                  </p>
                  <div className="flex flex-col gap-5">
                    <textarea
                      name=""
                      placeholder="Enter Your Comments"
                      className="border-2 border-gray-300 rounded-md p-5 w-full outline-none"
                      rows={8}
                      id=""
                    />
                    <div className="grid grid-cols-3 gap-3">
                      <input
                        placeholder="Enter Name"
                        type="text"
                        className="border-2 border-gray-300 rounded-md p-2 w-full outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Enter Email"
                        className="border-2 border-gray-300 rounded-md p-2 w-full outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Enter Website"
                        className="border-2 border-gray-300 rounded-md p-2 w-full outline-none"
                      />
                    </div>
                    <div className="flex gap-3">
                      <input type="checkbox" />
                      <p>
                        Save my name,email and website in this browser for the
                        next time i comment.
                      </p>
                    </div>{" "}
                    <div className="bg-dark-cyan cursor-pointer h-fit  group flex items-center text-white gap-3 py-2 pl-4 pr-2 rounded-full w-fit justify-center">
                      <span className="font-semibold  [word-spacing:3px]">
                        Post A Comment
                      </span>
                      <span className="rounded-full  group-hover:rotate-[-50deg] transition-all duration-200 bg-black p-1.5 ">
                        <IoArrowForwardOutline />
                      </span>
                    </div>
                  </div>
                </div>
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
                      <div className="grid grid-cols-2 items-center gap-5">
                        <img src={post1} className="rounded-xl" alt="" />
                        <div>
                          <h2 className="text-xl font-semibold mb-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                          </h2>
                          <p>01 OCT, 2025</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 items-center gap-5">
                        <img src={post2} className="rounded-xl" alt="" />
                        <div>
                          <h2 className="text-xl font-semibold mb-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                          </h2>
                          <p>15 OCT, 2025</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 items-center gap-5">
                        <img src={post3} className="rounded-xl" alt="" />
                        <div>
                          <h2 className="text-xl font-semibold mb-2">
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

export default BLogDetails;
