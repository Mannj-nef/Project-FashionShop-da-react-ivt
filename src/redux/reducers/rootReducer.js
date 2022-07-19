import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import modalReducer from "./modalReducer";
<<<<<<< HEAD
import categoryReducer from "./categoryReducer";
import orderReducer from "./orderReducer";
=======
import headerReducer from "./headerReducer";
import authReducer from "./authReducer";

>>>>>>> 2ebbd5e (use-detail)
const rootReducer = combineReducers({
  headerReducer,
  userReducer,
  modalReducer,
<<<<<<< HEAD
  productReducer,
  categoryReducer,
  orderReducer,
=======
  authReducer,
  product: productReducer,
>>>>>>> 2ebbd5e (use-detail)
});

export default rootReducer;
