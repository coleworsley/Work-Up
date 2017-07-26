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
    // this.getWorkoutData = this.getWorkoutData.bind(this);
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
    randomizeExercises(all, 1)
  }

  saveWorkout() {
    console.log(this.props)
    const { exercises: { current }, saveWorkout, user } = this.props;
    const workout = Object.assign({
      user_id: user.id,
      title: 'Test Workout',
      description: 'Test Workout',
      popularity: 1,
    },{
      exercises: current.map(e => ({
        name: e.name,
        description: e.description,
        popularity: e.popularity || 1
      }))
    })

    saveWorkout(workout);
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
