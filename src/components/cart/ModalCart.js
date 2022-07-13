import React from "react";
import { FaOpencart } from "react-icons/fa";
import ModalLayout from "../modalLayout/ModalLayout";
import CartItem from "./CartItem";

import { cartDetailItem } from "./MookData";

const ModalCart = () => {
  return (
    <>
      <ModalLayout>
        <div className="cart">
          <h2 className="text-[2.5rem] uppercase p-6 shadow-sm flex items-center gap-6">
            <FaOpencart className=""></FaOpencart>
            Cart
          </h2>
          {cartDetailItem.map((cartDetail) => (
            <CartItem key={cartDetail.id} cartDetail={cartDetail}></CartItem>
          ))}
          <div className="pay-cart">
            <div className="cart-total">
              <span>Cart Total: 10</span>
              <span> 100$</span>
            </div>
            <button className="btn btn-pay">Check out</button>
          </div>
        </div>
      </ModalLayout>
    </>
  );
};

export default ModalCart;
