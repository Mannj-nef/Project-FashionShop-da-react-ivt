import { ProductTypes } from "../../common/types";

const initialValue = {
  listProducts: [],
};

const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ProductTypes.GET_PRODUCT_SUCCESS: {
      return { ...state, listProducts: action.payload };
    }
    default:
      return state;
  }
};

export default productReducer;
