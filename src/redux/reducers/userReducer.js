import { UserTypes } from "../../common/types";

const initalValue = {
  listUser: [],
  user: {},
};

const userReducer = (state = initalValue, action) => {
  switch (action.type) {
    case UserTypes.LOGIN_SUCCESS: {
      return state;
    }

    default:
      return state;
  }
};

export default userReducer;
