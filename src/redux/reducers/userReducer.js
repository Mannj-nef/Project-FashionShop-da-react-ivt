import { REGISTER_MESSAGE } from "../../common/message";
import { UserTypes } from "../../common/types";

const initialValue = {
  isLoading: false,
  listUser: [],
  status: "",
};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case UserTypes.GET_USER_SUCCESS: {
      return { ...state, listUser: action.payload, isLoading: false };
    }
    case UserTypes.SET_LOADING: {
      return { ...state, isLoading: true };
    }
    case UserTypes.CREATE: {
      return {
        ...state,
        isLoading: false,
        status: REGISTER_MESSAGE.REGISTER_SUCCESS,
      };
    }
    case UserTypes.CREATE_FAIL: {
      return {
        ...state,
        isLoading: false,
        status: REGISTER_MESSAGE.REGISTER_FAIL,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
