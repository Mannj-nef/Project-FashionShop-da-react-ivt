import { RatingTypes } from "../../common/types";

export const actGetRatingByFilter = (payload) => ({
  type: RatingTypes.GET_RATING_BY_FILTER,
  payload: payload,
});

export const actGetRatingSuccess = (payload) => ({
  type: RatingTypes.GET_RATING_SUCCESS,
  payload: payload,
});

export const actSetLoading = () => ({
  type: RatingTypes.SET_LOADING,
});
