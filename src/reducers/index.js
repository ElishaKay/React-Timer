import {combineReducers} from 'redux';
import { reducer as formReducer } from "redux-form";
import tasksReducer from "./tasksReducer"; 
import counterReducer from "./counterReducer";
import taskListingReducer from "./taskListingReducer";
import tasksByIdReducer from "./tasksByIdReducer";
import usersByIdReducer from "./usersByIdReducer";
import usersListingReducer from "./usersListingReducer";


const rootReducer = combineReducers({
  usersById: usersByIdReducer,
  usersListing: usersListingReducer,
  tasksById: tasksByIdReducer,
  taskListing: taskListingReducer,
  count: counterReducer,
  tasks: tasksReducer,
  form: formReducer
});


export default rootReducer;
