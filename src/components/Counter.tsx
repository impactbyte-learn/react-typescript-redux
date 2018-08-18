import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { decrement, increment } from "../reducers";

interface IProps {
  counter: number;
  dispatch: Dispatch;
}

class Counter extends React.Component<IProps> {
  constructor(props) {
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
    this.props.dispatch(increment());
  }

  private decrease() {
    this.props.dispatch(decrement());
  }
}

export default connect(({ counter }: any) => ({ counter }))(Counter);
