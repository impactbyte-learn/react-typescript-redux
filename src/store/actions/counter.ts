import { Dispatch } from "redux";
import { DECREMENT, INCREMENT } from "../types";

export const increaseCounter = (dispatch: Dispatch) =>
  dispatch({ type: INCREMENT });

export const decreaseCounter = (dispatch: Dispatch) =>
  dispatch({ type: DECREMENT });
