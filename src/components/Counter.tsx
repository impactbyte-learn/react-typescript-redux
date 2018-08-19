import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IReduxState } from "../store/rootReducers";
import { INCREMENT, DECREMENT } from "../store/types";

interface IProps {
  counter: number;
  dispatch: Dispatch;
}

@(connect(({ counter }: IReduxState) => ({ counter })) as any)
export default class Counter extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  public render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }

  private increase() {
    this.props.dispatch({ type: INCREMENT });
  }

  private decrease() {
    this.props.dispatch({ type: DECREMENT });
  }
}
