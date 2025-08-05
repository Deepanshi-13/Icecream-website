import { combineReducers } from "redux";
import { cartReducer } from "./reducer.js";
import {flavorReducer} from "./reducer.js";
const rootReducer = combineReducers({
  cart: cartReducer,
  flavor: flavorReducer,
});
export default rootReducer;
