import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 2000) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  });
  const BackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={BackToTop}
      className={`w-12 h-12 bg-teal-950 hover:bg-teal-700  transition-all duration-200 justify-center items-center text-white fixed bottom-5 right-5 rounded-full z-10 ${
        showBtn ? "flex" : " hidden"
      }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
