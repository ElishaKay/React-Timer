import {combineReducers} from 'redux';
import { reducer as formReducer } from "redux-form";
import tasksReducer from "./tasks_reducer";
import {usersByIdReducer,usersListingReducer,postsByIdReducer,postListingReducer,counterReducer} from "./posts_and_users_reducers.js"; 


export default combineReducers({
  usersById: usersByIdReducer,
  usersListing: usersListingReducer,
  postsById: postsByIdReducer,
  postListing: postListingReducer,
  count: counterReducer,
  tasks: tasksReducer,
  form: formReducer
});
