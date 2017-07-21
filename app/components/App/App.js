import React, { Component } from 'react'
import NavContainer from '../../containers/NavContainer';
import LoginContainer from '../../containers/LoginContainer';
import Dashboard from '../Dashboard/Dashboard';
import { Route, Redirect } from 'react-router-dom'


export default class App extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <Route path='/' render={(props) => {
          if(Object.keys(user).length <= 0) {
            return <Redirect to='/login' />
          }
          return <NavContainer {...props} />
        }}/>

        <Route exact path='/login' component={LoginContainer}/>
        <Route path='/dashboard' component={Dashboard} />

      </div>

    )
  }
}
