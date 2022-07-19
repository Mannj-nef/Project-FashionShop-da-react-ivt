import React from "react";
import Sliders from "../../components/sliders/Sliders";
import BlogMain from "./BlogMain";
import BlogNav from "./BlogNav";

import "./style.scss";

const Product = () => {
  return (
    <div className="Blog">
      <Sliders bgImg="bg-slider-shop1"></Sliders>
      <div className="container blog-wrapp">
        <BlogMain></BlogMain>
        <BlogNav></BlogNav>
      </div>
    </div>
  );
};

export default Product;
