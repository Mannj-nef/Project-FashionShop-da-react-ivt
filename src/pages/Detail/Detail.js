import React, { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BiCommentEdit } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { FaOpencart } from "react-icons/fa";
import ChooseColor from "./ChooseColor";
import ModalCart from "../../components/cart/ModalCart";
import { modalAction } from "../../redux/actions/modal";
import Reviews from "./Reviews";
import CardProduct from "../../components/cardProduct/CardProduct";
import "./style.scss";

import image2 from "../../assets/image/slider_nav2.jpg";
import image3 from "../../assets/image/slider_nav5.jpg";

import useCheckDisplay from "../../hooks/useCheckDisplay";
import useTotop from "../../hooks/useTotop";
import { buyerRatings, productDetail, productRelateds } from "./DataMock";
import useClickActive from "../../hooks/useClickActive";
import FormReview from "./FormReviews";

const Stars5 = ({ size }) => {
  return (
    <>
      {Array(5)
        .fill(null)
        .map((star, index) => (
          <AiFillStar
            key={index}
            style={{ fontSize: size, display: "inline-block" }}
          ></AiFillStar>
        ))}
    </>
  );
};

const btnLinkSocials = [
  {
    id: 1,
    name: "facebook",
    urlLink: "https://www.facebook.com/manhquan.2002/",
  },
  {
    id: 2,
    name: "twitter",
    urlLink: "https://twitter.com/MannJ_nef",
  },
  {
    id: 3,
    name: "dribbble",
    urlLink: "https://dribbble.com/Mannj_nef",
  },
  {
    id: 4,
    name: "pinterest",
    urlLink: "https://www.pinterest.com/manhquan05012002/",
  },
  {
    id: 5,
    name: "instagram",
    urlLink: "https://www.instagram.com/mannj.nef_/",
  },
];

const Detail = () => {
  const [gender, setIsMale] = useState("male");
  const [isHear, setIsHear] = useState(false);
  const [imageDetailUrl, setImageDetailUrl] = useState(productDetail.imgUrl);
  const [showFormReview, setShowFormReview] = useState(false);
  const [valueColor, setValueColor] = useState("brown");
  const [valueSize, setValueSize] = useState("s");
  const [formReviewHeight, setFormReviewHeight] = useState(0);

  const FormReviewRef = useRef();

  useEffect(() => {
    const FormReview = FormReviewRef.current;
    const height = FormReview.scrollHeight;
    setFormReviewHeight(height);
  }, [formReviewHeight, showFormReview]);

  const handleScrollToTop = useTotop();

  const dispatch = useDispatch();
  useClickActive(".product-detail__nav");
  const cardProduct = useCheckDisplay(4, productRelateds);

  const handleCheckLikeHear = () => {
    setIsHear(!isHear);
  };

  const handleShowCart = () => {
    dispatch(modalAction.actShowModal());
  };

  const handleAddToCart = () => {
    handleScrollToTop();
    console.log(valueColor);
    console.log(valueSize);
  };
  const handleAddWidhList = () => {
    handleScrollToTop();
    setIsHear(true);
  };

  const handleShowImg = (e) => {
    const imgSrc = e.target.src;
    setImageDetailUrl(imgSrc);
  };

  const handleLoadMore = () => {
    console.log("load more");
  };

  return (
    <>
      <div className="detail-main container">
        <div className="detail-top">
          <h2 className="title">style theory</h2>
          <div className="detail_mail-btns">
            <button
              className={`btn-hear ${isHear && "active-hear"}`}
              onClick={handleCheckLikeHear}
            >
              <AiOutlineHeart className="cursor-pointer text-4xl "></AiOutlineHeart>
            </button>
            <button className=" btn-to_cart" onClick={handleShowCart}>
              <span>my cart</span>
              <FaOpencart></FaOpencart>
            </button>
            {/* <Cart></Cart> */}
            <ModalCart></ModalCart>
          </div>
        </div>
        <div className="detail-content">
          <div className="detail-image">
            <div className="">
              {productDetail.imgUrlRelated.map((image) => (
                <div key={image.id} className="w-[100px] h-[150px] mb-5">
                  <img
                    className={`product-detail__nav w-full h-full cursor-pointer object-cover ${
                      image.active && "active"
                    }`}
                    src={image.imgSrc}
                    alt="img product nav"
                    onClick={handleShowImg}
                  />
                </div>
              ))}
            </div>
            <div className="max-h-[700px] h-full w-full">
              <img
                className="w-full transition-all ease-linear h-full cursor-pointer object-cover"
                src={imageDetailUrl}
                alt="img product"
              />
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
            <h2 className="title-name text-line-2 ">{productDetail.title}</h2>
            <p className="price">
              <span>keepsake</span>
              <BsDot></BsDot>
              <span>{productDetail.price || "120"}$</span>
            </p>
            <p className="desc-product text-line-3">
              {productDetail.description}
            </p>
            <div className="pr-[100px] flex flex-col flex-1">
              <div className="color-product mb-5">
                <p className="uppercase mb-4">color</p>
                <div className="flex gap-5 items-center">
                  <ChooseColor
                    classTag="product-color"
                    color="#815137"
                    active
                    onClick={() => setValueColor("brown")}
                  ></ChooseColor>
                  <ChooseColor
                    classTag="product-color"
                    color="#6A5AF9"
                    onClick={() => setValueColor("blue")}
                  ></ChooseColor>
                  <ChooseColor
                    classTag="product-color"
                    color="#fd656b"
                    onClick={() => setValueColor("orange")}
                  ></ChooseColor>
                </div>
              </div>
              <div>
                <p className="uppercase mb-4">Size guide</p>
                <button
                  className={`btn-guide ${gender === "male" && "active"}`}
                  onClick={() => setIsMale("male")}
                >
                  male
                </button>
                <button
                  className={`btn-guide ${gender === "female" && "active"}`}
                  onClick={() => setIsMale("female")}
                >
                  female
                </button>
                <div className="w-full h-[180px] my-10">
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
                <p className="uppercase ">Size</p>
                <div className="flex ml-20 gap-5 items-center">
                  <ChooseColor
                    classTag="product-size"
                    active
                    size
                    onClick={() => setValueSize("s")}
                  >
                    S
                  </ChooseColor>
                  <ChooseColor
                    classTag="product-size"
                    size
                    onClick={() => setValueSize("m")}
                  >
                    M
                  </ChooseColor>
                  <ChooseColor
                    classTag="product-size"
                    size
                    onClick={() => setValueSize("xl")}
                  >
                    XL
                  </ChooseColor>
                </div>
              </div>
              <div className="flex gap-5 mt-auto">
                <button
                  className=" flex-1 p-3 btn-add-cart"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
                <button
                  className="flex-1 p-3 btn-add-cart__wish-List"
                  onClick={handleAddWidhList}
                >
                  Add width wish List
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-conten-reviews">
          <div className="reviews-item">
            <div>
              <h2 className="reviews-title">
                <span className="mr-5">5.0</span>
                <Stars5 size="2.5rem" />
              </h2>
              <p>Based on 5 Reviews</p>
            </div>
            <button
              className="flex items-center gap-3 py-3 px-4 shadow-lg border transition-all hover:shadow-none hover:opacity-70 hover:border-[#ccc]"
              onClick={() => setShowFormReview(!showFormReview)}
            >
              <BiCommentEdit></BiCommentEdit>
              <span>Write a Review</span>
            </button>
          </div>
          <div
            ref={FormReviewRef}
            className="formRating"
            style={{
              height: !showFormReview ? 0 : formReviewHeight,
            }}
          >
            <FormReview setShowFormReview={setShowFormReview}></FormReview>
          </div>
          {buyerRatings.map((buyerRating) => (
            <Reviews key={buyerRating.id} buyer={buyerRating}>
              <Stars5 size="2rem" />
            </Reviews>
          ))}
          <div className="text-center">
            <button
              className="btn-load-reviews hover:opacity-80"
              onClick={handleLoadMore}
            >
              Load More Reviews
            </button>
          </div>
        </div>
        <div className="other-products">
          <h2 className="" style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
            You may also like
          </h2>
          <CardProduct cardProduct={cardProduct}></CardProduct>
        </div>
      </div>
      <div className="detail-footer flex gap-4 p-4 items-center justify-between ">
        {btnLinkSocials.map((social) => (
          <button className="button-link" key={social.id}>
            <a
              className="detail-link-social"
              rel="noreferrer"
              target="_blank"
              href={social.urlLink}
            >
              {social.name}
            </a>
            <p> {social.name}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export default Detail;
