import { createStore } from "redux";

function reducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  { counter: 0 },
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => console.log("store change" + store.getState().counter));

export default store;
