import React, { useState } from "react";

const CartItem = ({ cartDetail }) => {
  const [quantity, setQuanTity] = useState(1);

  const handleIncrease = () => {
    if (quantity >= 10) return;
    setQuanTity((pre) => pre + 1);
    console.log("delete");
  };

  const handleDecrease = () => {
    if (quantity <= 0) return;
    setQuanTity((pre) => pre - 1);
  };
  return (
    <div className="cart-item flex gap-2 items-center justify-between p-[2px] mx-2">
      <div className="img-wrapp w-[80px] h-[80px] flex-2">
        <img
          className="w-full h-full object-cover"
          src={cartDetail.imgUrl}
          alt=""
        />
      </div>
      <div className="flex-1">
        <h3 className="cart-item_title text-line-2 font-medium">
          {cartDetail.title}
        </h3>
        <span>{cartDetail.price}$</span>
      </div>
      <div className="flex-2">
        <div className="flex justify-end items-center gap-2">
          <span className="amount select-none" onClick={handleDecrease}>
            -
          </span>
          <span className="amount amount-quantity select-none">{quantity}</span>
          <span className="amount select-none" onClick={handleIncrease}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
