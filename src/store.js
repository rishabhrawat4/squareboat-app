import { createStore } from "redux";
import RootReducer from "./Reducers/RootReducers";

function configureStore(state = {}) {
  return createStore(RootReducer,state);
}

export default configureStore;