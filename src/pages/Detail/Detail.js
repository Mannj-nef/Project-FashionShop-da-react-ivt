import React, { useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

import image1 from "../../assets/image/slider_nav4.jpg";
import image2 from "../../assets/image/slider_nav2.jpg";
import image3 from "../../assets/image/slider_nav5.jpg";

import "./style.scss";
import Radio from "../../components/input/Radio";
import { FaOpencart } from "react-icons/fa";

const price = 120;

const Detail = () => {
  const [gender, setIsMale] = useState("male");
  const [isHear, setIsHear] = useState(false);
  const [valueColor, setValueColor] = useState("");

  const handleCheckLikeHear = () => {
    setIsHear(!isHear);
  };

  return (
    <div className="detail-main container">
      <div className="detail-top">
        <h2 className="title">style theory</h2>
        <div className="detail_mail-btns">
          <button
            className={`btn btn-hear ${isHear && "active-hear"}`}
            onClick={handleCheckLikeHear}
          >
            <AiOutlineHeart className="cursor-pointer text-4xl "></AiOutlineHeart>
          </button>
          <button className="btn btn-to_cart">
            <span>my cart</span>
            <FaOpencart></FaOpencart>
          </button>
        </div>
      </div>
      <div className="detail-content">
        <div className="detail-image">
          <div className="">
            {Array(3)
              .fill(null)
              .map((image, index) => (
                <div key={index} className="w-[100px] h-[150px] mb-5">
                  <img
                    className="w-full h-full object-cover"
                    src={image1}
                    alt=""
                  />
                </div>
              ))}
          </div>
          <div className="max-h-[700px] h-full w-full">
            <img className="w-full h-full object-cover" src={image1} alt="" />
          </div>
        </div>
        <div className="detail-main-info">
          <div className="reviews">
            {Array(5)
              .fill(null)
              .map((statr, index) => (
                <AiFillStar
                  key={index}
                  className="text-yellow-400"
                ></AiFillStar>
              ))}
            <span className="ml-5">150 Reviews</span>
          </div>
          <h2 className="title-name text-line-2 ">Title name product</h2>
          <p className="price">
            <span>keepsake</span>
            <BsDot></BsDot>
            <span>{price || "120"}$</span>
          </p>
          <p className="desc-product text-line-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus corrupti doloribus fuga consequatur cumque nihil. Ex
            at sunt corrupti magni maiores deserunt deleniti temporibus facere
            quas architecto, alias aliquam dolorum?
          </p>
          <div className="pr-[100px] flex flex-col flex1">
            <div className="color-product mb-5">
              <p className="uppercase mb-4">color</p>
              <div className="flex gap-5 items-center">
                <Radio
                  style={{ color: "gray" }}
                  onChange={setValueColor}
                  value="gray"
                ></Radio>
                <Radio
                  style={{ color: "blue" }}
                  onChange={setValueColor}
                  value="blue"
                ></Radio>
                <Radio
                  style={{ color: "black" }}
                  onChange={setValueColor}
                  value="gray"
                ></Radio>
              </div>
            </div>
            <div>
              <p className="uppercase mb-4">Size guide</p>
              <button
                className={`btn btn-guide ${gender === "male" && "active"}`}
                onClick={() => setIsMale("male")}
              >
                male
              </button>
              <button
                className={`btn btn-guide ${gender === "female" && "active"}`}
                onClick={() => setIsMale("female")}
              >
                female
              </button>
              <div className="w-full h-[200px] my-10">
                {gender === "male" ? (
                  <img
                    className="w-full h-full object-cover"
                    src={image2}
                    alt="male"
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover"
                    src={image3}
                    alt="female"
                  />
                )}
              </div>
            </div>
            <div>
              <p className="uppercase mb-4">Size</p>
              <div className="flex ml-20 gap-5 items-center">
                <Radio onChange={setValueColor} value="m"></Radio>
                <Radio onChange={setValueColor} value="l"></Radio>
                <Radio onChange={setValueColor} value="xl"></Radio>
              </div>
            </div>
            <div className="flex gap-5 mt-auto">
              <button className="btn flex-1 p-5 btn-add-cart">
                {" "}
                Add to cart
              </button>
              <button className="btn flex-1 p-5"> Add width wishList</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
