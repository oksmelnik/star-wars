import axios from 'axios';

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
