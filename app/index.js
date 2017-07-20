import React from 'react';
import ReactDOM from 'react-dom';

import store, { history } from './store'
import { Provider } from 'react-redux'

import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';

import App from './components/App/App';


ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <Route to='/' component={App}/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main')
);
