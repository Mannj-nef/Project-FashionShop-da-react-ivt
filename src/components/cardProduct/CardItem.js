import React from "react";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTER_PATH } from "../../common/routerLink";

const CardItem = ({ card }) => {
  const history = useHistory();

  const handleToDetail = (id) => {
    console.log(`to detail  ${id}`);
    history.push(
      generatePath(ROUTER_PATH.DETAIL.path, {
        id: id,
      })
    );
  };

  return (
    <div className="card-product" onClick={() => handleToDetail(card.id)}>
      <div className="card-wrapp_image">
        <img
          className="cart-img w-full h-full object-cover"
          src={card.img}
          alt=""
        />
      </div>
      <div className="cart-info">
        <h3 className="product-name">{card.productName}</h3>
        <span className="product-price">{card.price}</span>
      </div>
    </div>
  );
};

export default CardItem;
