import { combineReducers } from "redux";
import { cartReducer } from "./reducer";
import {flavorReducer} from "./reducer";
const rootReducer = combineReducers({
  cart: cartReducer,
  flavor: flavorReducer,
});
export default rootReducer;
