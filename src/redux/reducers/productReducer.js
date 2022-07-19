import { ProductTypes } from "../../common/types";

const initialValue = {
  isLoading: false,
  listProducts: [],
};

const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ProductTypes.GET_PRODUCT_SUCCESS: {
      return { ...state, listProducts: action.payload, isLoading: false };
    }
    case ProductTypes.SET_LOADING: {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};

export default productReducer;
