import { createStore, Reducer } from "redux";
import { MapStateToProps, MapDispatchToProps } from "react-redux";

function reducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer, { counter: 0 });
store.subscribe(() => console.log("store change" + store.getState().counter));

export default store;
