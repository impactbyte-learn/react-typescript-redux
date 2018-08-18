import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface IProps {
  counter: number;
  dispatch: Dispatch;
}

class Counter extends React.Component<IProps> {
  constructor(props) {
    super(props);
    this.addCounter = this.addCounter.bind(this);
  }

  public render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={this.addCounter}>Add</button>
      </div>
    );
  }

  private addCounter() {
    this.props.dispatch({ type: "INCREMENT", payload: 1 });
  }
}

export default connect(({ counter }: any) => ({ counter }))(Counter);
