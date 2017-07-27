import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { userReducer, userLoading } from './userReducer';
import { exercises, pageLoading } from './exerciseReducer';
import { workoutReducer } from './workoutReducer';
import { detailReducer } from './detailReducer';
import { categories } from './categories';


export default combineReducers({
  router: routerReducer,
  user: userReducer,
  userLoading,
  exercises,
  loading: pageLoading,
  workouts: workoutReducer,
  detail: detailReducer,
  categories,
});
