import React from "react";
import { FaOpencart } from "react-icons/fa";
import ModalLayout from "../modalLayout/ModalLayout";

const ModalCart = () => {
  return (
    <>
      <ModalLayout>
        <div className="cart">
          <h2 className="text-[2.5rem] uppercase p-6 shadow-sm flex items-center gap-6">
            <FaOpencart className=""></FaOpencart>
            Cart
          </h2>
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
