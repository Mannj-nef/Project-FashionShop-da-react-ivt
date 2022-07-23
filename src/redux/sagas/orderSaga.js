import { call, put, takeLeading } from "redux-saga/effects";
import { getOrderById, getOrders } from "../../apis/orderApi";
import { OrderTypes } from "../../common/types";
import { actSetLoading } from "../actions/categoryAction";
function* fetchOrders(action) {
  yield put(actSetLoading());
  try {
    const orders = yield call(getOrders);
    yield put({
      type: OrderTypes.GET_ORDER_SUCCESS,
      payload: orders,
    });
  } catch (e) {
    yield put({ message: e.message });
  }
}
function* fetchOrderById(action) {
  yield put(actSetLoading());
  try {
    const order = yield call(getOrderById, action.payload);
    yield put({
      type: OrderTypes.GET_ORDER_BY_ID_SUCCESS,
      payload: order,
    });
  } catch (e) {
    yield put({ message: e.message });
  }
}
function* watchAllOrder() {
  yield takeLeading(OrderTypes.GET_All_ORDER, fetchOrders);
}
function* watchDetailOrder() {
  yield takeLeading(OrderTypes.GET_ORDER_BY_ID, fetchOrderById);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [watchAllOrder(), watchDetailOrder()];
