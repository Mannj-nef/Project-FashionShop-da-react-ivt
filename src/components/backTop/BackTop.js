import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

import "./style.scss";

const BackTop = () => {
  const [isShow, setIsShow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const number = 500;
    const handleIsShow = () => {
      if (window.scrollY > number) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };
    document.addEventListener("scroll", handleIsShow);

    return () => document.removeEventListener("scroll", handleIsShow);
  }, []);

  return (
    <div className="back-to-top">
      <div
        className={`to-top ${isShow ? "is-show" : ""}`}
        onClick={handleScrollToTop}
      >
        <AiOutlineArrowUp className="icon-to-top"></AiOutlineArrowUp>
      </div>
    </div>
  );
};

export default BackTop;
