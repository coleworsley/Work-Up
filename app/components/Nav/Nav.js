import React, { Component } from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';
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
        <div className='nav-link-container'>
          <Link to='/dashboard' className='nav-link'>Dashboard</Link>
          <Link to='/workouts' className='nav-link'>Workouts</Link>
          <Link to='/exercises' className='nav-link'>Exercises</Link>
        </div>
        <h3 className='nav-username'>Welcome: { first_name }</h3>
      </header>
    )
  }
}
