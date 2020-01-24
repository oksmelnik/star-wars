import axios from 'axios';

export const LOAD_LIST = 'LOAD_LIST'

export const loadList = (payload, loading) => (dispatch) => {
  dispatch(
    {
      type: LOAD_LIST,
      payload: payload
    }
  )
}
export const fetchPeople = dispatch => {
      axios('https://swapi.co/api/people')
      .then(res => {
        dispatch({
          type: "FETCH_PEOPLE",
          payload: res.data.results
        })
      })
      .catch(e => console.error(e))
}
