import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface IProps {
  counter: number;
  dispatch: Dispatch;
}

class Counter extends React.Component<IProps> {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button
          onClick={() => this.props.dispatch({ type: "INCREMENT", payload: 1 })}
        >
          Add
        </button>
      </div>
    );
  }
}

export default connect(({ counter }: any) => ({ counter }))(Counter);
