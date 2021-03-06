export default (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      const newState = {...state};
      action.payload.tasks.forEach((task) => {
        newState[task.id] = task;
      });
      return newState;
    default: return state
  }
}