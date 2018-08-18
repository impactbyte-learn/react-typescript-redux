import { handleActions, createAction } from "redux-actions";

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");

export interface IReduxState {
  counter: number;
}

export default handleActions<IReduxState>(
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
