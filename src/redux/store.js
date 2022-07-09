import {} from "react-redux";
import { createStore } from "redux";
import userReducer from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store =
  process.env.NODE_ENV === "production"
    ? createStore(userReducer)
    : createStore(userReducer, composeWithDevTools());

export default store;
