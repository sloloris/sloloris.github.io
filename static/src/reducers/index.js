import { combineReducers } from 'redux';
import currentView from './currentView';

const allReducers = combineReducers({
  currentView,
})

export default allReducers