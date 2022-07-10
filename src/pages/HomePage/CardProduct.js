import React from "react";

const CardProduct = ({ card }) => {
  return (
    <div className="card-product">
      <div className="card-wrapp_image">
        <img
          className="cart-img w-full h-full object-cover"
          src={card.img}
          alt=""
        />
      </div>
      <div className="cart-info">
        <h3 className="product-name">{card.name}</h3>
        <span className="product-price">{card.price}</span>
      </div>
    </div>
  );
};

export default CardProduct;
