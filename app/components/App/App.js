import React, { Component } from 'react'
import Nav from '../Nav/Nav';
import LoginContainer from '../../containers/LoginContainer';
import { Route, Redirect } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div>
        <Redirect to='/login' />
        <Route path='/login' component={LoginContainer}/>
        <Route exact path='/' component={Nav} />

      </div>

    )
  }
}
