import { useEffect, useState } from "react";

export default function useCheckDisplay(number, listDataProduct) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (listDataProduct && listDataProduct.length < number) {
      setProductList(listDataProduct);
      return;
    }

    if (listDataProduct && listDataProduct.length > 0) {
      let newCardProduct = [];
      for (let index = 0; index < number; index++) {
        newCardProduct.push(listDataProduct.reverse()[index]);
      }
      setProductList(newCardProduct);
    }
  }, [listDataProduct, number]);

  return productList;
}
