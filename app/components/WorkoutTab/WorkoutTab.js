import React, { Component } from 'react';
import { randomizeArr } from '../../constants';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import './WorkoutTab.css';

export default class WorkoutTab extends Component {
  constructor() {
    super();
    this.state = {
      listedExercises: [],
    }
    this.randomize = this.randomize.bind(this);
    this.saveWorkout = this.saveWorkout.bind(this);
    this.getWorkoutData = this.getWorkoutData.bind(this);
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

  saveWorkout() {
    const { current } = this.props.exercises;
    const converted = current.map(e => {
      return {
        name: e.name,
        description: e.description,
        popularity: 1,
      }
    });

    fetch('api/v1/exercises', {
      method: 'POST',
      body: JSON.stringify(converted),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(data => console.log(data))

    fetch('api/v1/workouts', {
      method: 'POST',
      body: JSON.stringify(Object.assign({
        title: 'My First Workout',
        description: 'placeholder',
        user_id: 1,
        popularity: 1,
        count: 1,
      }, {exercises: converted })),
      headers: { 'Content-Type': 'application/json' },

    })
    .then(res => res.json())
    .then(data => console.log(data))

    fetch('api/v1/exercises')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  getWorkoutData() {

  }

  render() {
    return (
      <main className='workout-tab'>
        <section className='workout-build'>
          <h1>Build Workout</h1>
          <div className="workout-btn-container">
            <button
              className='workout-randomize-btn'
              onClick={this.randomize}>
              Randomize
            </button>
            <button
              className="save-workout-btn"
              onClick={this.saveWorkout}>
              Save Workout
            </button>
            {/* <button className="complete-workout-btn">Complete Workout

            </button> */}
          </div>
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
