import { AuthTypes } from "../../common/types";

const initialState = {
  profile: {},
  isLoggIn: false,
  isAuthenticated: false,
  isLoading: false,
  notif: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN: {
      //   console.log(action.payload);
      return {
        ...state,
        profile: action.payload,
        notif: AuthTypes.LOGIN_SUCCESS,
      };
    }
    case AuthTypes.LOGIN_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        profile: action.payload,
        notif: AuthTypes.LOGIN_SUCCESS,
      };
    }
    case AuthTypes.LOGIN_FAIL: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
