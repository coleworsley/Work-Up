import React, { Component } from 'react'
import './Nav.css';
// require("./Nav.css");

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const { user: { first_name }, user: { last_name } } = this.props
    return (
      <header className='nav-bar'>
        <h1 className='nav-title title'>
          Work
          <span className='nav-title-span title-span'>
            Up
          </span>
        </h1>
        <div className='nab-link-container'>
          <button className='nav-link'>Dashboard</button>
          <button className='nav-link'>Workouts</button>
          <button className='nav-link'>Exercises</button>
        </div>
        <h1 className='nav-username'>Welcome: { first_name }</h1>
      </header>
    )
  }
}
