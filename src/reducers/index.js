import { combineReducers } from 'redux';
import VersesReducer from './reducers_verses'

const rootReducer = combineReducers({
  verses : VersesReducer,
});

export default rootReducer;