import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import store from "./store";

import About from "./components/About";
import Counter from "./components/Counter";

export default class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <h1>Hello World</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
            {/* <Switch> */}
            <Route exact path="/" component={Counter} />
            <Route path="/about" component={About} />
            {/* </Switch> */}
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
