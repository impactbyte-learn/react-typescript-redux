import { Reducer } from "redux";
import { INCREMENT, DECREMENT } from "../types";

const counterReducer: Reducer = (state = 0, action): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
