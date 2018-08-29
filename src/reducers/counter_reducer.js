
export const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('action.id: ',action.id)
      return state + 1;
    default: return state;
  }
}
