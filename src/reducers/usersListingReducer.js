export default (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.payload.users.map(x => x.id);
    default: return state
  }
};
