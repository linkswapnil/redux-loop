import { combineReducers } from 'redux-loop';
import movieReducer from './moviesReducer';

export default combineReducers({
  movies : movieReducer
})
