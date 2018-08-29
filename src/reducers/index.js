import {combineReducers} from 'redux';
import { reducer as formReducer } from "redux-form";
import tasksReducer from "./tasks_reducer";
import {counterReducer} from "./posts_and_users_reducers.js"; 


export default combineReducers({
  count: counterReducer,
  tasks: tasksReducer,
  form: formReducer
});
