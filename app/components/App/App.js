import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import NavContainer from '../../containers/NavContainer';
import LoginContainer from '../../containers/LoginContainer';

import Dashboard from '../Dashboard/Dashboard';
import WorkoutTab from '../WorkoutTab/WorkoutTab';


export default class App extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <Route path='/' render={(props) => {
          if(!user.id) {
            return <Redirect to='/login' />
          }
          return <NavContainer {...props} />
        }}/>

        <Route exact path='/login' component={LoginContainer}/>
        <Route path='/workouts' component={WorkoutTab} />
        {/* <Route path='/dashboard' component={Dashboard} /> */}

      </div>

    )
  }
}
