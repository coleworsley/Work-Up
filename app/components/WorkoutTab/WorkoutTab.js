import React, { Component } from 'react';
import { randomizeArr } from '../../constants'
import {ExerciseCard} from '../ExerciseCard/ExerciseCard'

export default class WorkoutTab extends Component {
  constructor() {
    super();
    this.state = {
      listedExercises: [],
    }
    this.randomize = this.randomize.bind(this);
  }

  componentDidMount(){
    const { fetchAPIExercises, randomizeExercises, exercises: { all } } = this.props;
    if (!all.length) fetchAPIExercises();
  }

  buildExercises() {
    const { all, current } = this.props.exercises;
    return current.map(e => <ExerciseCard key={e.id} {...e} />)
  }

  randomize() {
    const { randomizeExercises, exercises: { all } } = this.props;
    randomizeExercises(all, 10)
  }

  render() {
    return (
      <main className='workout-tab'>
        <section className='workout-build'>
          <h1>Build Workout</h1>
          <button
            className='workout-randomize-btn'
            onClick={this.randomize}>Randomize</button>
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
