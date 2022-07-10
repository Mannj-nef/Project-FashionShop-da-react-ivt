import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { ROUTER_PATH } from "../../common/routerLink";
import Sliders from "../../components/sliders/Sliders";
import CardProduct from "./CardProduct";
import ImageSlider from "./ImageSlider";
import "./style.scss";
import "./base.scss";

import image1 from "../../assets/image/slider_nav4.jpg";
import image2 from "../../assets/image/slider_nav2.jpg";
import image3 from "../../assets/image/slider_nav5.jpg";
import image4 from "../../assets/clothes-Image/product-t-shirt4.jpg";
import image5 from "../../assets/image/banner10.jpg";
import image6 from "../../assets/image/banner2.jpg";
import image7 from "../../assets/image/banner9.jpg";
import image8 from "../../assets/image/banner11.jpg";
import Experts from "./Experts";

const arrImage = [image1, image2, image3, image3];

const product = [
  {
    id: 1,
    img: image4,
    price: "$ 70",
    name: "Beige V neck button cardigan",
  },
  {
    id: 2,
    img: image4,
    price: "$ 70",
    name: "Beige V neck button cardigan",
  },
  {
    id: 3,
    img: image4,
    price: "$ 70",
    name: "Beige V neck button cardigan",
  },
  {
    id: 4,
    img: image4,
    price: "$ 70",
    name: "Beige V neck button cardigan",
  },
  {
    id: 5,
    img: image4,
    price: "$ 70",
    name: "Beige V neck button cardigan",
  },
  {
    id: 6,
    img: image4,
    price: "$ 70",
    name: "Beige V neck button cardigan",
  },
  {
    id: 7,
    img: image4,
    price: "$ 70",
    name: "Beige V neck button cardigan",
  },
  {
    id: 8,
    img: image4,
    price: "$ 70",
    name: "Beige V neck button cardigan",
  },
];

const Home = () => {
  const [cardProduct, setCardPrduct] = useState([]);

  useEffect(() => {
    let newCardProduct = [];
    for (let index = 0; index < 8; index++) {
      newCardProduct.push(product[index]);
    }
    setCardPrduct(newCardProduct);
  }, []);

  return (
    <div className="home_page">
      <Sliders></Sliders>
      <div className="container">
        <div className="highlight-wrapp ">
          <h2 className="title">
            "Your appearance today is a reflection of your condition today, So
            choose your the best outfit your best day today"
          </h2>
        </div>
        <div className="slide_nav_wrapp">
          <button className="btn btn-slider_nav btn-left">
            <BsArrowLeft className="icon"></BsArrowLeft>
          </button>

          <div className="slide_nav">
            {arrImage.length > 0 &&
              arrImage.map((imageSlider, index) => (
                <ImageSlider
                  key={index}
                  imageSlider={imageSlider}
                ></ImageSlider>
              ))}
          </div>

          <button className="btn btn-slider_nav btn-right">
            <BsArrowRight className="icon"></BsArrowRight>
          </button>
        </div>
        <div className="highlight-wrapp ">
          <h2 className="title">Popular Collection</h2>
        </div>
        <div className="card-product-wrapper">
          {cardProduct?.length > 0 &&
            cardProduct?.map((card) => (
              <CardProduct key={card.id} card={card}></CardProduct>
            ))}
        </div>
        <div className="flex items-center collection">
          <div className="flex-1">
            <img className="collection-image" src={image5} alt="" />
          </div>
          <div className="collection-slogan__wrapp">
            <h1 className="collection-title">The PerFect Collection</h1>
            <p className="collection_sub">
              a collection of fashions that are diverse in brand styles and
              trends of the year, So you can choose what you want
            </p>
            <button className="btn btn-collection">Explore Collection</button>
          </div>
        </div>
        <div className="flex gap-5 wrapper-shop-gender">
          <div className="flex-1 relative cursor-pointer">
            <img src={image6} alt="" />
            <div className="gender">
              <Link to={ROUTER_PATH.SHOP_MAN.path}>Shop Woman</Link>
            </div>
          </div>
          <div className="flex-1 relative cursor-pointer">
            <img src={image7} alt="" />
            <div className="gender">
              <Link to={ROUTER_PATH.SHOP_WOMAN.path}>Shop Man</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="experts-story-wrapp">
        <div className="container">
          <h2 className="title">Experts Story</h2>
          <div className="slide_nav_wrapp">
            <button className="btn btn-slider_nav btn-experts btn-left">
              <BsArrowLeft className="icon"></BsArrowLeft>
            </button>

            <div className="slide_nav justify-center experts-story">
              {Array(3)
                .fill(null)
                .map((item, index) => (
                  <Experts key={index} image={image2}></Experts>
                ))}
            </div>

            <button className="btn btn-slider_nav btn-experts btn-right">
              <BsArrowRight className="icon"></BsArrowRight>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="home-footer">
          <img className="rounded-xl" src={image8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
