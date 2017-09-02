const currentView = (state=0, action) => { // state for just value this reducer manages
  switch(action.type) {
    case 'SET_CURRENT_VIEW':
      return action.payload.index

    default:
      return state
  }
}

export default currentView