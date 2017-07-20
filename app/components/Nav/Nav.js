import React, { Component } from 'react'
// import './Nav.css';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <header className='nav-bar'>
        <h1 className='nav-title'>Work <span className='nav-title-span'>Up</span></h1>
        <div className='nab-link-container'>
          <button className='nav-link'>Dashboard</button>
          <button className='nav-link'>Workouts</button>
          <button className='nav-link'>Exercises</button>
        </div>
        <h1 className='nav-username'>Cole Worsley</h1>
      </header>
    )
  }
}
