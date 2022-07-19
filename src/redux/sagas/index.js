import { all } from "@redux-saga/core/effects";
<<<<<<< HEAD
import categorySaga from "./categorySaga";
import orderSaga from "./orderSaga";
import userSaga from "./userSaga";
import productSaga from "./productSaga";

function* rootSaga() {
  yield all([...productSaga, ...categorySaga, ...orderSaga, ...userSaga]);
=======
import authSaga from "./authSaga";

import productSaga from "./productSaga";

function* rootSaga() {
  yield all([...productSaga, ...authSaga]);
>>>>>>> 2ebbd5e (use-detail)
}

export default rootSaga;
