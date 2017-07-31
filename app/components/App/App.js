import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import NavContainer from '../../containers/NavContainer';
import LoginContainer from '../../containers/LoginContainer';
import WorkoutTabContainer from '../../containers/WorkoutTabContainer';

import Dashboard from '../Dashboard/Dashboard';
import WorkoutTab from '../WorkoutTab/WorkoutTab';


export default class App extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <Route path='/' render={(props) => !user.id
          ? <Redirect to='/login' />
          : <NavContainer {...props} />}
        />

        <Route exact path='/login' component={LoginContainer} />
        <Route path='/workouts' component={WorkoutTabContainer} />
        <Route path='/dashboard' component={Dashboard} />

      </div>

    )
  }
}
