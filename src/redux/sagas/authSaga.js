import { call, put, takeLeading } from "redux-saga/effects";
import { getUser, logIn } from "../../apis/authApi";
import { AuthTypes } from "../../common/types";

import {
  actLoginFail,
  actLoginSuccess,
  actSetLoadingSuccess,
} from "../actions/auth/authAction";

function* login(action) {
  console.log(action);
  yield put(actSetLoadingSuccess());
  try {
    const accounts = yield call(logIn);
    // const profile = yield call(getUser, account);
    // console.log(profile);
    // yield put(actLoginSuccess({ profile }));
  } catch (error) {
    yield put(actLoginFail());
  }
}

function* watchLogin() {
  yield takeLeading(AuthTypes.LOGIN, login);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [watchLogin()];
