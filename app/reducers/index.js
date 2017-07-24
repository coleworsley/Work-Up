import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { userReducer, userLoading } from './userReducer';
import { exercises, pageLoading } from './exerciseReducer';


export default combineReducers({
  router: routerReducer,
  user: userReducer,
  userLoading,
  exercises,
  loading: pageLoading,
});
