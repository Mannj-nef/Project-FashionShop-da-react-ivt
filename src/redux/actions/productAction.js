import { ProductTypes } from "../../common/types";

export const actGetAllProduct = () => ({
  type: ProductTypes.GET_All_PRODUCT,
});
export const actGetProductByCat = (payload) => ({
  type: ProductTypes.GET_PRODUCT_BY_CAT,
  payload: payload,
});

export const actGetProductSuccess = (payload) => ({
  type: ProductTypes.GET_PRODUCT_SUCCESS,
  payload: payload,
});

export const actSetLoading = () => ({
  type: ProductTypes.SET_LOADING,
});
