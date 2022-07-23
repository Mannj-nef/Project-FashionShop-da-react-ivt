import { ProductTypes } from "../../common/types";

export const actGetAllProduct = () => ({
  type: ProductTypes.GET_All_PRODUCT,
});
export const actGetProductByCat = (payload) => ({
  type: ProductTypes.GET_PRODUCT_BY_CAT,
  payload: payload,
});

export const actGetProductById = (payload) => ({
  type: ProductTypes.GET_PRODUCT_BY_ID,
  payload: payload,
});
export const actGetProductByIdSuccess = (payload) => ({
  type: ProductTypes.GET_PRODUCT_BY_ID_SUCCESS,
  payload: payload,
});

export const actGetProductByGender = (payload) => {
  return {
    type: ProductTypes.GET_PRODUCT_BY_GENDER,
    payload: payload,
  };
};

export const actGetProductSuccess = (payload) => ({
  type: ProductTypes.GET_PRODUCT_SUCCESS,
  payload: payload,
});

export const actSetLoading = () => ({
  type: ProductTypes.SET_LOADING,
});
