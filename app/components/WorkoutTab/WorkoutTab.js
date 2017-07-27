import React, { Component } from 'react';
import { randomizeArr } from '../../constants';
import ExerciseCardContainer from '../../containers/ExerciseCardContainer';
import './WorkoutTab.css';
import DetailViewContainer from '../../containers/DetailViewContainer'

export default class WorkoutTab extends Component {
  constructor() {
    super();
    this.state = {
      listedExercises: [],
      imageUrls: []
    }
    this.randomize = this.randomize.bind(this);
    this.saveWorkout = this.saveWorkout.bind(this);
  }

  componentDidMount(){
    const { fetchAPIExercises,
            fetchWorkouts,
            randomizeExercises,
            exercises: { all },
            workouts,
            fetchCategories,
            categories } = this.props;
    // if (!Object.keys(categories).length) fetchCategories()
    if (!all.length) fetchAPIExercises()
    if (!workouts.length) fetchWorkouts()
  }

  buildExercises() {
    const { exercises: {current}, detail } = this.props;
    return current.map(e => {
      const active = e.id === detail.id;
      return <ExerciseCardContainer key={e.id} {...e} active={active}/>
    })
  }

  // buildWorkouts() {
  //   const { workouts } = this.props;
  //
  //   return workouts.length ? workouts.map(e => (
  //     <div>
  //       <h3>Workout title: {e.title}</h3>
  //       <p>Workout description: {e.description}</p>
  //       <p>Workout exercises: {e.exercises.map(exercise => <p>{exercise.name}</p>)}</p>
  //     </div>
  //   ))
  //   : null
  // }


  randomize() {
    const { randomizeExercises, exercises: { all } } = this.props;
    randomizeExercises(all, 1)
  }

  saveWorkout() {
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
          </div>
          <div className="exercise-container">
            {this.buildExercises()}
          </div>

        </section>
        <section className='workout-popular'>
          <h1>Popular Workouts</h1>
          <DetailViewContainer />
            {/* <img src={imageUrl} alt=""/> */}
            {/* {this.buildWorkouts()} */}

        </section>
      </main>
    )
  }
}
