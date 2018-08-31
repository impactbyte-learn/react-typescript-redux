import { increaseCounter, decreaseCounter } from "../../store/actions/counter";
import store from "../../store";

describe("Counter Action", () => {
  it("Should increase counter", () => {
    const currentState = store.getState();
    increaseCounter(store.dispatch);
    expect(store.getState().counter).toBe(currentState.counter + 1);
  });
  it("Should decrease counter", () => {
    const currentState = store.getState();
    decreaseCounter(store.dispatch);
    expect(store.getState().counter).toBe(currentState.counter - 1);
  });
});
