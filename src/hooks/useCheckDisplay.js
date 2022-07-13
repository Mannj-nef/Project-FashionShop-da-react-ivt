import { useEffect, useState } from "react";

export default function useCheckDisplay(number, listDataProduct) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    let newCardProduct = [];
    for (let index = 0; index < number; index++) {
      newCardProduct.push(listDataProduct[index]);
    }
    setProductList(newCardProduct);
  }, [listDataProduct, number]);

  return productList;
}
