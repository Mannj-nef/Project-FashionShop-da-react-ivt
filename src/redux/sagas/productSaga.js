import { call, put, takeLeading } from "redux-saga/effects";
import { getProducts } from "../../apis/productApi";
import { ProductTypes } from "../../common/types";
function* fetchProducts(action) {
  try {
    const products = yield call(getProducts);
    yield put({ type: ProductTypes.GET_PRODUCT_SUCCESS, payload: products });
  } catch (e) {
    yield put({ message: e.message });
  }
}
function* watchAllProduct() {
  yield takeLeading(ProductTypes.GET_All_PRODUCT, fetchProducts);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
	watchAllProduct()
];
