import { AuthTypes } from "../../common/types";

const initialState = {
  profile: {},
  isLoggIn: false,
  isLoading: false,
  notif: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN: {
      return {
        ...state,
        isLoading: false,
        notif: "",
      };
    }
    case AuthTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoggIn: true,
        profile: action.payload,
      };
    }
    case AuthTypes.SET_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthTypes.LOGIN_FAIL: {
      console.log("tai khoan k ton tai");
      return {
        ...state,
        isLoggIn: false,
        isLoading: false,
        notif: "tai khoan k ton tai",
      };
    }
    case AuthTypes.LOGOUT: {
      return {
        ...state,
        isLoggIn: false,
        profile: {},
      };
    }

    default:
      return state;
  }
};

export default authReducer;
