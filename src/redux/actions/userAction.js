import { UserTypes } from "../../common/types";

export const actGetAllUser = () => ({
  type: UserTypes.GET_All_USER,
});

export const actGetUserSuccess = (payload) => ({
  type: UserTypes.GET_USER_SUCCESS,
  payload: payload,
});

export const actSetLoading = () => ({
  type: UserTypes.SET_LOADING,
});
