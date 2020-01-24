
export default (state = [], action) => {
  console.log('triggerd', action.payload)
  switch (action.type) {
      case 'FETCH_PEOPLE' :
      return {
        ...state,
        payload: action.payload
      }

       default :
        return state
    }
}
