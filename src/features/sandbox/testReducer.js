export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// actions
export function increment(amount) {
    return {
        type: INCREMENT_COUNTER,
        payload: amount
    }
}

export function decrement(amount) {
    return {
        type: DECREMENT_COUNTER,
        payload: amount
    }
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
