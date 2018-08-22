import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IReduxState } from "../store/rootReducers";
import { INCREMENT, DECREMENT } from "../store/types";

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
    increase: () => dispatch({ type: INCREMENT }),
    decrease: () => dispatch({ type: DECREMENT })
  })
)(Counter);
