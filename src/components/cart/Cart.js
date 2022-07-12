import React, { useState } from "react";
import ModalLayout from "../modalLayout/ModalLayout";
import { useDispatch } from "react-redux";
import { FaOpencart } from "react-icons/fa";

import { modalAction } from "../../redux/actions/modal";
import "./style.scss";
import ModalCart from "./ModalCart";

const Cart = () => {
  const [isShoeCart, setIsshowCart] = useState(false);
  const dispatch = useDispatch();

  const handleShowCart = () => {
    dispatch(modalAction.actShowModal());
    setIsshowCart(!isShoeCart);
  };

  return (
    <>
      <div onClick={handleShowCart} className="cart-icon">
        <FaOpencart className=""></FaOpencart>
        <span className="text-lg font-semibold">Buy now</span>
      </div>
      <div className="cart-wrapp">
        <ModalCart></ModalCart>
      </div>
    </>
  );
};

export default Cart;
