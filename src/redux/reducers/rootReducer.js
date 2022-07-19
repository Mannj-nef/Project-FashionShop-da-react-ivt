import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import modalReducer from "./modalReducer";
import categoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";
import headerReducer from "./headerReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  headerReducer,
  userReducer,
  modalReducer,
  productReducer,
  categoryReducer,
  orderReducer,
});

export default rootReducer;
