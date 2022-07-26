import { RatingTypes } from "../../common/types";

const initialValue = {
  isLoading: false,
  listRatings: [],
};

const ratingReducer = (state = initialValue, action) => {
  switch (action.type) {
    case RatingTypes.GET_RATING_SUCCESS: {
      return { ...state, listRatings: action.payload, isLoading: false };
    }
    case RatingTypes.SET_LOADING: {
      return { ...state, isLoading: true };
    }

    default:
      return state;
  }
};

export default ratingReducer;
