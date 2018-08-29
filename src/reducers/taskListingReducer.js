export default (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.payload.tasks.map(x => x.id);
    default: return state
  }
}

