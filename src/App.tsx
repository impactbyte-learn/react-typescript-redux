import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import store from "./store";

import Contact from "./components/Contact";
import Counter from "./components/Counter";

export default class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <h1>Hello World</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
            <Route exact path="/" component={Counter} />
            <Route path="/about" component={Contact} />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
