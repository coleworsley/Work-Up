import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const history = createHistory();
const enhancers = [];
const middleware = [routerMiddleware(history), thunk];
//
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
enhancers.push(devTools)


// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
//
//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension())
//   }
// }

const composeEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const store = createStore(rootReducer, composeEnhancers);

export default store;
