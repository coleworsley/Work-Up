import { combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux';

export const history = createHistory();
export const routerConnected = routerMiddleware(history);

export const rootReducer = combineReducers({
  router: routerReducer,
});
