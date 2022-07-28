import React, { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BiCommentEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

import { FaOpencart } from "react-icons/fa";
import { modalAction } from "../../redux/actions/modal";
import Reviews from "./Reviews";
import CardProduct from "../../components/cardProduct/CardProduct";
import "./style.scss";

import useCheckDisplay from "../../hooks/useCheckDisplay";
import useClickActive from "../../hooks/useClickActive";
import FormReview from "./FormReviews";
import Socials from "./Socials";
import { useParams } from "react-router-dom";
import {
  actGetAllProduct,
  actGetProductById,
} from "../../redux/actions/productAction";
import DetailProduct from "./DetailProduct";
import Cart from "../../components/cart/Cart";
import { actChangeWishList } from "../../redux/actions/cart/cartAction";
import { actGetRatingByFilter } from "../../redux/actions/ratingAction";
import { Rate } from "antd";

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
  const [showFormReview, setShowFormReview] = useState(false);
  const [formReviewHeight, setFormReviewHeight] = useState(0);

  const { id } = useParams();
  const FormReviewRef = useRef();
  const dispatch = useDispatch();

  const headerHeight = useSelector((state) => state.headerReducer.height);
  const { product, listProducts } = useSelector(
    (state) => state.productReducer
  );
  const { listCart } = useSelector((state) => state.cartReducer);
  const { listRatings } = useSelector((state) => state.ratingReducer);
  let count = 0;
  let rate = 0;
  // eslint-disable-next-line array-callback-return
  listRatings.map((rating) => {
    count++;
    rate += rating.rate;
  });

  let avgRate = Math.round(rate / count);
  const wishList = listCart.filter((item) => +item.id === +id);

  useClickActive(".product-detail__nav");
  const cardProduct = useCheckDisplay(4, listProducts);

  useEffect(() => {
    dispatch(actGetProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(actGetAllProduct());
    dispatch(actGetRatingByFilter({ productId: parseInt(id) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const FormReview = FormReviewRef.current;
    const height = FormReview.scrollHeight;
    setFormReviewHeight(height);
  }, [formReviewHeight, showFormReview]);

  const handleCheckLikeHear = () => {
    dispatch(
      actChangeWishList({ wishList: !wishList[0]?.wishList || false, id })
    );
  };

  const handleShowCart = () => {
    dispatch(modalAction.actShowModal());
  };

  const handleLoadMore = () => {
    console.log("load more");
  };

  return (
    <>
      <div
        className="detail-main container"
        style={{ paddingTop: headerHeight + 20 }}
      >
        <div className="detail-top">
          <h2 className="title">style theory</h2>
          <div className="detail_mail-btns">
            <button
              className={`btn-hear ${wishList[0]?.wishList && "active-hear"}`}
              onClick={handleCheckLikeHear}
            >
              <AiOutlineHeart className="cursor-pointer text-4xl "></AiOutlineHeart>
            </button>
            <button className=" btn-to_cart" onClick={handleShowCart}>
              <span>my cart</span>
              <FaOpencart></FaOpencart>
            </button>
            <Cart></Cart>
          </div>
        </div>
        {/* detail product */}
        <DetailProduct product={product} listCart={listCart}></DetailProduct>

        <div className="detail-conten-reviews">
          <div className="reviews-item">
            <div>
              <h2 className="reviews-title">
                <span className="mr-5">{avgRate ? avgRate : 0}</span>
                {avgRate ? <Rate disabled defaultValue={avgRate} /> : null}
              </h2>
              <p>Based on {count} Reviews</p>
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
          {listRatings.map((buyerRating) => (
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
          <h2
            className="title-also_like"
            style={{ fontSize: "2.5rem", marginBottom: "30px" }}
          >
            You may also like
          </h2>
          <CardProduct cardProduct={cardProduct}></CardProduct>
        </div>
      </div>
      <Socials btnLinkSocials={btnLinkSocials}></Socials>
    </>
  );
};

export default Detail;
