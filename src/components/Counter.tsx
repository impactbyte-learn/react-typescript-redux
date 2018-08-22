import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IReduxState } from "../store/rootReducers";
import { INCREMENT, DECREMENT } from "../store/types";
import { increaseCounter, decreaseCounter } from "../store/actions/counter";

interface IProps {
  counter: number;
  increase: () => void;
  decrease: () => void;
}

const Counter = ({ counter, increase, decrease }: IProps) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
);

export default connect(
  ({ counter }: IReduxState) => ({ counter }),
  (dispatch: Dispatch) => ({
    increase: () => increaseCounter(dispatch),
    decrease: () => decreaseCounter(dispatch)
  })
)(Counter);
