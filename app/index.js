import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { rootReducer, history, routerConnected } from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = [routerConnected, thunk];

const store = createStore(
    rootReducer,
    devTools,
    applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store} >
    {/* <ConnectedRouter history={history}> */}
      {/* <Route to='/' component={App}/> */}
      <App/>
    {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById('main')
)
