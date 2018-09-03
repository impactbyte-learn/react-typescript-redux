import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import store from "./store";

import "./static/index.css";
import image from "./static/image.png";
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
            <Route exact={true} path="/" component={Counter} />
            <Route path="/about" component={Contact} />
            <hr />
            <h1>Load Image</h1>
            <img src={image} alt="image" />
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
