import _ from "lodash";
import { FETCH_TASKS, SAVE_TASK, DELETE_TASK } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_TASK:
      return _.omit(state, action.payload);
    case SAVE_TASK:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_TASKS:
      return action.payload;
    default:
      return state;
  }
}
