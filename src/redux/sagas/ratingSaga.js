/* eslint-disable import/no-anonymous-default-export */
import { call, put, takeLeading } from "redux-saga/effects";
import { getRatings } from "../../apis/ratingApi";
import { RatingTypes } from "../../common/types";
import { actSetLoading } from "../actions/ratingAction";

function* fetchRatingByFilter(action) {
  yield put(actSetLoading());
  try {
    const ratings = yield call(getRatings, { ...action.payload });
    yield put({ type: RatingTypes.GET_RATING_SUCCESS, payload: ratings });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* watchAllRatingByFilter() {
  yield takeLeading(RatingTypes.GET_RATING_BY_FILTER, fetchRatingByFilter);
}

export default [watchAllRatingByFilter()];
