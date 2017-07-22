import React, { Component } from 'react';

export default class WorkoutTab extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch('https://wger.de/api/v2/exercise/?format=json&language=2&limit=500')
      .then(res => res.json())
      .then(data => this.setState({ data: data.results }))
  }

  buildExercises() {
    return this.state.data.map(e => <p>{e.name}</p>)
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
          i
        </section>
      </main>
    )
  }
}
