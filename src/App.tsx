import * as React from "react";
import { Provider } from "react-redux";
import store from "./store";

import Counter from "./components/Counter";

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Hello World</h1>
          <Counter />
        </div>
      </Provider>
    );
  }
}
