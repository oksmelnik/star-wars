import people from './peopleReducer'
import { combineReducers } from 'redux'

const reducers = {
  people
}

export default combineReducers(reducers)
