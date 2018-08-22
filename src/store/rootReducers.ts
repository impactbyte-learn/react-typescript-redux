import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import counterReducer from "./reducers/counter";

export interface IReduxState {
  counter: number;
  form: any;
}

export default combineReducers<IReduxState>({
  counter: counterReducer,
  form: formReducer
});
