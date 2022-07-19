import { all } from "@redux-saga/core/effects";
import categorySaga from "./categorySaga";
import orderSaga from "./orderSaga";
import userSaga from "./userSaga";
import productSaga from "./productSaga";

function* rootSaga() {
  yield all([...productSaga, ...categorySaga, ...orderSaga, ...userSaga]);
}

export default rootSaga;
