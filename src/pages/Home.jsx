import React from "react";
import LandingPage from "../Components/LandingPage";
import Solutions from "../Components/Solutions";
import Companies from "../Components/Companies";
import Strategies from "../Components/Strategies";
import Process from "../Components/Process";
import Projects from "../Components/Projects";
import Testimonials from "../Components/Testimonials";
import Plans from "../Components/plans/Plans";
import Blogs from "../Components/Blogs";

const Home = () => {
  return (
    <>
      <LandingPage />
      <Solutions />
      <Companies />
      <Strategies />
      <Process />
      <Projects />
      <Testimonials />
      <Plans />
      <Blogs />
    </>
  );
};

export default Home;
