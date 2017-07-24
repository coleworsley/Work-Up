import React, { Component } from 'react';
import { randomizeArr } from '../../constants'

export default class WorkoutTab extends Component {
  constructor() {
    super();
    this.state = {
      listedExercises: [],
    }
  }

  componentDidMount(){
    const { fetchAPIExercises, randomizeExercises, exercises: { all } } = this.props;
    if (!all.length) fetchAPIExercises();
  }



  buildExercises() {
    const { all, current } = this.props.exercises;

    return current.map(e => (
      <div>
        <p>{e.name}</p>
        {/* <p>{e.description}</p> */}
      </div>
    ))
  }


  render() {
    return (
      <main className='workout-tab'>
        this is the workout tab
        <section className='workout-build'>
          <h1>Build Workout</h1>
          <div className="exercise-container">
            {this.buildExercises()}
          </div>

        </section>
        <section className='workout-popular'>
          <h1>Popular Workouts</h1>

        </section>
      </main>
    )
  }
}
