import {} from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const store =
  process.env.NODE_ENV === "production"
    ? createStore(rootReducer)
    : createStore(rootReducer, composeWithDevTools());

export default store;
