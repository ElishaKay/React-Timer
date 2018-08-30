import { INCREMENT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log('action.payload: ',action.payload)
      action.payload.count+=1
      return { ...state,  [action.payload.id]: action.payload  };
    default: return state;
  }
}