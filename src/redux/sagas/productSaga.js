import { call, put, takeLeading } from "redux-saga/effects";
import { getProducts } from "../../apis/productApi";
import { ProductTypes } from "../../common/types";
import { actSetLoading } from "../actions/productAction";
function* fetchProducts(action) {
  yield put(actSetLoading());
  try {
    const products = yield call(getProducts);
    yield put({ type: ProductTypes.GET_PRODUCT_SUCCESS, payload: products });
  } catch (e) {
    yield put({ message: e.message });
  }
}
function* fetchProductsByCat(action) {
  yield put(actSetLoading());
  try {
    const products = yield call(getProducts, action.payload);
    yield put({ type: ProductTypes.GET_PRODUCT_SUCCESS, payload: products });
  } catch (e) {
    yield put({ message: e.message });
  }
}
function* watchAllProduct() {
  yield takeLeading(ProductTypes.GET_All_PRODUCT, fetchProducts);
}
function* watchAllProductByCat() {
  yield takeLeading(ProductTypes.GET_PRODUCT_BY_CAT, fetchProductsByCat);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [watchAllProduct(), watchAllProductByCat()];
