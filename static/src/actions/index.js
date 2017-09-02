export const setCurrentView = (index) => {
  return ({
      type: 'SET_CURRENT_VIEW',
      payload: {
        index:index
      }
  })
}