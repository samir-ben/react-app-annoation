import { combineReducers } from 'redux';
import ReducerVerse from './reducers_verses';
import ReducerPosts from './reducers_posts';
import ReducerActivePost from './reducers_active_post'

const rootReducer = combineReducers({
  verses : ReducerVerse,
  posts: ReducerPosts,
  ActivePost: ReducerActivePost
});

export default rootReducer;