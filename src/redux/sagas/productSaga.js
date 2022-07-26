import { call, put, takeLatest, takeLeading } from "redux-saga/effects";
import { getProducts, getProductsById } from "../../apis/productApi";
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
function* fetchProductsByFilter(action) {
  yield put(actSetLoading());
  try {
    const products = yield call(getProducts, {...action.payload});
    yield put({ type: ProductTypes.GET_PRODUCT_SUCCESS, payload: products });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchProductsByGender(action) {
  yield put(actSetLoading());
  try {
    const products = yield call(getProducts);

    const gender = products.filter((item) =>
      item.gender.includes(action.payload)
    );

    yield put({ type: ProductTypes.GET_PRODUCT_BY_GENDER, gender });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* fetchProductsById(action) {
  yield put(actSetLoading());
  try {
    const id = action.payload;
    const productDetail = yield call(getProductsById, id);
    yield put({ type: ProductTypes.GET_PRODUCT_BY_ID_SUCCESS, productDetail });
  } catch (e) {
    yield put({ message: e.message });
  }
}

function* watchAllProduct() {
  yield takeLeading(ProductTypes.GET_All_PRODUCT, fetchProducts);
}
function* watchAllProductByFilter() {
  yield takeLeading(ProductTypes.GET_PRODUCT_BY_FILTER, fetchProductsByFilter);
}
function* watchAllProductsByGender() {
  yield takeLeading(ProductTypes.GET_PRODUCT_BY_GENDER, fetchProductsByGender);
}
function* watchAllProductById() {
  yield takeLatest(ProductTypes.GET_PRODUCT_BY_ID, fetchProductsById);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  watchAllProduct(),
  watchAllProductByFilter(),
  watchAllProductsByGender(),
  watchAllProductById(),
];
