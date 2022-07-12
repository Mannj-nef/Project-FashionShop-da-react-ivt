import React, { useState } from "react";
import CardItem from "./CardItem";
import CardItemLoading from "./CardItemLoading";
import "./style.scss";

const CardProduct = ({ cardProduct }) => {
  const [isLoading, setIsloading] = useState(true);

  useState(() => {
    const timmer = setTimeout(() => {
      setIsloading(false);
    }, 2000);

    return () => clearTimeout(timmer);
  }, []);
  return (
    <div className="card-product-wrapper">
      {!isLoading &&
        cardProduct?.length > 0 &&
        cardProduct?.map((card) => (
          <CardItem key={card.id} card={card}></CardItem>
        ))}
      {isLoading &&
        Array(8)
          .fill(null)
          .map((item, index) => (
            <CardItemLoading key={index}></CardItemLoading>
          ))}
    </div>
  );
};

export default CardProduct;
