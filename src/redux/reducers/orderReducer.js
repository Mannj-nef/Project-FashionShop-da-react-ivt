import { OrderTypes } from "../../common/types";

const initialValue = {
  isLoading: false,
  listOrder: [],
  detailOrder: {},
};

const orderReducer = (state = initialValue, action) => {
  switch (action.type) {
    case OrderTypes.GET_ORDER_SUCCESS: {
      return {
        ...state,
        listOrder: action.payload,
        isLoading: false,
      };
    }
    case OrderTypes.GET_ORDER_BY_ID_SUCCESS: {
      return { ...state, isLoading: false, detailOrder: action.payload };
    }
    case OrderTypes.SET_LOADING: {
      return { ...state };
    }
    case OrderTypes.ADD_ORDER: {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
};

export default orderReducer;
