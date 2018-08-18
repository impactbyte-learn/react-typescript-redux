import { handleActions, createAction } from "redux-actions";

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");

interface IState {
  counter: number;
}

export default handleActions<IState>(
  {
    INCREMENT: (state, action) => ({
      ...state,
      counter: state.counter + 1
    }),
    DECREMENT: (state, action) => ({
      ...state,
      counter: state.counter - 1
    })
  },
  { counter: 0 }
);
