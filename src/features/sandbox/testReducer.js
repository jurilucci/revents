import { asyncActionError, asyncActionStart } from "../../app/async/asyncReducer";
import { delay } from "../../app/common/util/util";
import { asyncActionFinish } from "./../../app/async/asyncReducer";
import {toast} from 'react-toastify';

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// actions
export function increment(amount) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      await delay(1000);
      dispatch({ type: INCREMENT_COUNTER, payload: amount });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
}

export function decrement(amount) {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      await delay(1000);
      // throw 'oops';
      dispatch({ type: DECREMENT_COUNTER, payload: amount });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      toast.error(error);
    }
  };
}

//state
const initialState = {
  data: 42,
};

//reducer
export default function testReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + action.payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - action.payload,
      };
    default:
      return state;
  }
}
