import { UserTypes } from "../../common/types";

const initialValue = {
  isLoading: false,
  listUser: [],
};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case UserTypes.GET_USER_SUCCESS: {
      return { ...state, listUser: action.payload, isLoading: false };
    }
    case UserTypes.SET_LOADING: {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};

export default userReducer;
