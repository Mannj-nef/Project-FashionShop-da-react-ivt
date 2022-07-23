import { call, put, takeLeading } from "redux-saga/effects";
import { getUser } from "../../apis/authApi";
import { AuthTypes } from "../../common/types";

import {
  actLoginFail,
  actLoginSuccess,
  actSetLoadingSuccess,
} from "../actions/auth/authAction";

function* login(action) {
  yield put(actSetLoadingSuccess());
  try {
    const userAll = yield call(getUser);

    const email = action.payload.email;
    const passWord = action.payload.password;

    const account = userAll.filter(
      (item) => item.email === email && item.password === passWord
    );
    if (account.length > 0) {
      yield put(actLoginSuccess(...account));
    } else {
      yield put(actLoginFail(...account));
    }
  } catch (error) {
    yield put(actLoginFail());
  }
}

function* watchLogin() {
  yield takeLeading(AuthTypes.LOGIN, login);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [watchLogin()];
