
export default (state = [], action) => {

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
