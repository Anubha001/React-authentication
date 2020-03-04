import { combineReducers } from "redux";
import {
  items,
  itemsHasErrored,
  itemsIsLoading,
  isLoginSuccess,
  loginError,
  isLoginPending
  
} from "./items";
export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  isLoginSuccess,
  loginError,
  isLoginPending
});
