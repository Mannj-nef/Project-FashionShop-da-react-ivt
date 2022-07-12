import { ProductTypes } from "../../common/types";

export const actGetAllProduct = () => ({
  type: ProductTypes.GET_All_PRODUCT,
});

export const actGetProductSuccess = (payload) => ({
  type: ProductTypes.GET_PRODUCT_SUCCESS,
  payload: payload,
});
