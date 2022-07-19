import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import modalReducer from "./modalReducer";
import categoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";
const rootReducer = combineReducers({
  userReducer,
  modalReducer,
  productReducer,
  categoryReducer,
  orderReducer,
});

export default rootReducer;
