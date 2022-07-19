import { call, put, takeLeading } from "redux-saga/effects";
import { getUsers } from "../../apis/userApi";
import { UserTypes } from "../../common/types";
import { actSetLoading } from "../actions/userAction";
function* fetchUsers(action) {
  yield put(actSetLoading());
  try {
    const users = yield call(getUsers);
    yield put({
      type: UserTypes.GET_USER_SUCCESS,
      payload: users,
    });
  } catch (e) {
    yield put({ message: e.message });
  }
}
function* watchAllUser() {
  yield takeLeading(UserTypes.GET_All_USER, fetchUsers);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [watchAllUser()];
