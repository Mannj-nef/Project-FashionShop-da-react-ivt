import React from "react";

import Sliders from "../../components/sliders/Sliders";
import HighlightSlogan from "../../components/highlightSlogan/HighlightSlogan";
import "./manStyle.scss";

import { productMan } from "./mookData";

import image from "../../assets/image/banner9.jpg";
import CardProduct from "../../components/cardProduct/CardProduct";
import useCheckDisplay from "../../hooks/useCheckDisplay";
import Paging from "../../components/paging/Paging";

const ShopMan = () => {
  const productMain = useCheckDisplay(4, productMan);

  console.log(productMain);
  return (
    <div className="shop-man">
      <Sliders bgImg="bg-slider-shop5">
        <div className="container silder-slogan__wrapp  shop-man-slider_slogan">
          <h1 className="slogan-title">Your outfit express who you ape</h1>
          <p className="slogan_sub">
            Don't wory abount your appearance today, we are here for you to
            provider what you need to color your day and let's make a beatiful
            story today
          </p>
          <p className="text-center">Yout outfit express who you ape</p>
        </div>
      </Sliders>

      <HighlightSlogan>
        <h2 className="title">Clothes make the man</h2>
        <p className=" text-center mt-4">
          Clothes and manners do not make the man; but when he is made, they
          greatly improve his appearance
        </p>
      </HighlightSlogan>

      {/* conten-top */}
      <div className="container">
        <div className="flex flex-row-reverse items-center shop-man-content-top">
          <div className="flex-1">
            <img className="shop-man-content-top-image" src={image} alt="" />
          </div>
          <div className="shop-man-content-top-slogan__wrapp">
            <h1 className="shop-man-content-top-title">Forget the rule</h1>
            <p className="shop-man-content-top_sub">
              Wear it in the way you like it and make your own rule
            </p>
          </div>
        </div>
        <HighlightSlogan>
          <h2 className="title">The world is full of guys, be a man</h2>
          <p className=" text-center mt-4">
            lothes and manners do not make the man; but when he is made, they
            greatly improve his appearance
          </p>
        </HighlightSlogan>
        {/* product-main */}
        <CardProduct cardProduct={productMain}></CardProduct>
      </div>
      {/* banner */}
      <div className="banner">
        <div className="container banner-conten">
          <h3>
            Fashion is a language that creates itself in clothes to interpret
            reality
          </h3>
        </div>
      </div>
      <div className="container">
        <CardProduct cardProduct={productMan}></CardProduct>
        <Paging></Paging>
      </div>
    </div>
  );
};

export default ShopMan;
