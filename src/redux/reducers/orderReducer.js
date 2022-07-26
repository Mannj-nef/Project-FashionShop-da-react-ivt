import { OrderTypes } from "../../common/types";

const initialValue = {
  isOrderLoading: false,
  listOrder: [],
  detailOrder: {},
};

const orderReducer = (state = initialValue, action) => {
  switch (action.type) {
    case OrderTypes.GET_ORDER_SUCCESS: {
      return {
        ...state,
        listOrder: action.payload,
        isOrderLoading: false,
      };
    }
    case OrderTypes.GET_ORDER_BY_ID_SUCCESS: {
      return { ...state, isOrderLoading: false, detailOrder: action.payload };
    }
    case OrderTypes.SET_LOADING: {
      // console.log("loading order");
      return { ...state, isOrderLoading: true };
    }
    case OrderTypes.ADD_ORDER: {
      return { ...state, isOrderLoading: false };
    }
    default:
      return state;
  }
};

export default orderReducer;
