import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  userReducer,
  modalReducer,
  product: productReducer,
});

export default rootReducer;
