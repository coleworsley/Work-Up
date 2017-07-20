import React, { Component } from 'react'
import Nav from '../Nav/Nav';
import LoginContainer from '../../containers/LoginContainer';
import { Route, Redirect } from 'react-router-dom'


export default class App extends Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <Route path='/' render={(props) => {
          console.log(props);
          if(Object.keys(user).length <= 0) {
            return <Redirect to='/login' />
          }
          return <Nav {...props} />
        }}/>
        <Route path='/login' component={LoginContainer}/>

      </div>

    )
  }
}


/*
<Route exact path='/' component={Nav} />
<Redirect to='/login' />

<Route path='/create-idea' render={(props) => {
    // logic for redirect on sign in
    if(this.state.ideas.length > 100) return <Redirect to='/'/>

    return (
      <div>
        <h1>CREATE IDEAS!!!!!!!</h1>
        <CreateItem {...props} type='ideas' submitForm={this.submitIdea.bind(this)}/>
      </div>
    )
}} />
*/
