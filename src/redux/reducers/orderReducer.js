import { OrderTypes } from "../../common/types";

const initialValue = {
  isLoading: false,
  listOrder: [],
  detailOrder: {},
};

const categoryReducer = (state = initialValue, action) => {
  switch (action.type) {
    case OrderTypes.GET_ORDER_SUCCESS: {
      return {
        ...state,
        listOrder: action.payload,
        detailOrder: action.payload,
        isLoading: false,
      };
    }
    case OrderTypes.SET_LOADING: {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};

export default categoryReducer;
