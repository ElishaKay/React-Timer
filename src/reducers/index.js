import {combineReducers} from 'redux';

export const usersByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      const newState = {...state};
      action.payload.users.forEach((user) => {
        newState[user.id] = user;
      });
      return newState;
    default: return state
  }
};

export const usersListingReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.payload.users.map(x => x.id);
    default: return state
  }
};


export const tasksByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      const newState = {...state};
      
      action.payload.tasks.forEach((task) => {
        newState[task.id] = task;
      });
      console.log('newState: ', newState)
      return newState;
    default: return state
  }
}

export const taskListingReducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.payload.tasks.map(x => x.id);
    default: return state
  }
}

export const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default: return state;
  }
}

export default combineReducers({
  usersById: usersByIdReducer,
  usersListing: usersListingReducer,
  tasksById: tasksByIdReducer,
  taskListing: taskListingReducer,
  count: counterReducer,
});
