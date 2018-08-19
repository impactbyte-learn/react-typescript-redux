import { combineReducers } from "redux";
import counterReducer from "./reducers/counter";

export interface IReduxState {
  counter: number;
}

export default combineReducers<IReduxState>({
  counter: counterReducer
});
