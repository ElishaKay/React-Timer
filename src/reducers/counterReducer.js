import { INCREMENT } from "../actions/types";

export default (state = 1, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log('action.payload: ',action.payload)
      return state + 1;
    default: return state;
  }
}