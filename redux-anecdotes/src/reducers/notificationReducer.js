const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'NOTIFICATE':
      state = action.content
      return state
    case 'CLEAR':
      state = null
      return state
    default:
      return state
  }
}

export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch({
      type: 'NOTIFICATE',
      content
    })
    setTimeout(() => {
      dispatch({
        type: 'CLEAR'
      })
    }, time * 1000)

  }
}



export default notificationReducer