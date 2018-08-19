import { createStore, applyMiddleware, Middleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./rootReducers";

const middlewares: Middleware[] = [
  process.env.NODE_ENV === "development" ? logger : null,
  thunk
].filter(Boolean);

const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
);

export default store;
