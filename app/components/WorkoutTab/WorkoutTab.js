import React, { Component } from 'react';

export default class WorkoutTab extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    if (!(this.state.data.length > 0)) {
      fetch('https://wger.de/api/v2/exercise/?format=json&language=2&limit=20')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ data: data.results })
      })
    }
  }

  buildExercises() {
    return this.state.data.map(e => (
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
