import { call, put, takeLeading } from "redux-saga/effects";
import { addOrder, getOrderById, getOrders } from "../../apis/orderApi";
import { OrderTypes } from "../../common/types";
import { actRemoveAllCart } from "../actions/cart/cartAction";
import { actSetLoading } from "../actions/orderAction";
import { actAddOrder } from "../actions/orderAction";
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

function* fetchaddOrder(action) {
  const data = action.payload;
  yield put(actSetLoading());
  try {
    yield call(addOrder, data);
    yield put(actAddOrder());
    // yield put(actRemoveAllCart());
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* watchAddOrder() {
  yield takeLeading(OrderTypes.ADD_ORDER, fetchaddOrder);
}

function* watchAllOrder() {
  yield takeLeading(OrderTypes.GET_All_ORDER, fetchOrders);
}
function* watchDetailOrder() {
  yield takeLeading(OrderTypes.GET_ORDER_BY_ID, fetchOrderById);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [watchAllOrder(), watchDetailOrder(), watchAddOrder()];
