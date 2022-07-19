import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Cart from "../../components/cart/Cart";

import Paging from "../../components/paging/Paging";
import Sliders from "../../components/sliders/Sliders";
import CardProduct from "./../../components/cardProduct/CardProduct";
import { product as dataProduct } from "./mookData";
import "./storeStyle.scss";

const sliders = [
  "bg-slider-shop",
  "bg-slider-shop1",
  "bg-slider-shop2",
  "bg-slider-shop3",
];

const ShopStore = () => {
  const [bgImg, setBgImg] = useState("bg-slider-shop");
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    let img;
    const timmer = setInterval(() => {
      img = sliders[Math.floor(Math.random() * sliders.length)];
      setBgImg(img);
    }, 3000);

    return () => clearInterval(timmer);
  }, []);

  const handleClick = (e) => {
    console.log(e.target.textContent);
  };

  const handleSearch = () => {
    console.log("search", valueInput);
    setValueInput("");
  };

  return (
    <div className="shop-store">
      <Sliders bgImg={bgImg}></Sliders>
      <div className="store_nav-wrapp">
        <div className="container store_nav">
          <h2 className="title">Shop</h2>
          <div className="directional ">
            <p className="cursor-pointer" onClick={handleClick}>
              Man
            </p>
            <p className="cursor-pointer" onClick={handleClick}>
              Women
            </p>
            <p className="cursor-pointer" onClick={handleClick}>
              Kids
            </p>
          </div>
          <div className="search-wrapp">
            <div className="relative">
              <input
                type="text"
                value={valueInput}
                className="search"
                onChange={(e) => setValueInput(e.target.value)}
                placeholder="Search"
              />
              <BiSearch
                className="icon-search"
                onClick={handleSearch}
              ></BiSearch>
            </div>
            <AiOutlineHeart className="icon-hear cursor-pointer"></AiOutlineHeart>
          </div>
        </div>
      </div>
      <div className="container shop-content ">
        <div className="shop-wrapp-right">
          <CardProduct cardProduct={dataProduct}></CardProduct>
          <Cart></Cart>
          <Paging></Paging>
        </div>
      </div>
    </div>
  );
};

export default ShopStore;
