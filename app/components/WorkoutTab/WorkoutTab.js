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
      imageUrls: [],
      workout: 'Workout A',
      description: '',
      randomAmount: 5,
      showDetail: false,
    }
    this.randomize = this.randomize.bind(this);
    this.saveWorkout = this.saveWorkout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  componentDidMount(){
    const { fetchAPIExercises,
            fetchWorkouts,
            randomizeExercises,
            exercises: { all },
            workouts,
            categories } = this.props;
    if (!all.length) fetchAPIExercises()
    if (!workouts.length) fetchWorkouts()
  }

  buildExercises() {
    const { exercises: {current}, detail } = this.props;
    return current.map(e => {
      const active = e.id === detail.id;
      return <ExerciseCardContainer key={e.id} {...e} active={active} toggleDetail={this.state.showDetail}/>
    })
  }

  toggleDetail() {
    this.setState({ showDetail: !this.state.showDetail })
  }

  handleChange(e) {
    const { name, value } = e.target;
    const newValue = isNaN(parseInt(value)) ? value : parseInt(value);

    this.setState({[name]: newValue});
  }

  randomize() {
    const { randomizeExercises, exercises: { all } } = this.props;
    randomizeExercises(all, this.state.randomAmount);
  }

  saveWorkout() {
    const { exercises: { current }, saveWorkout, user } = this.props;
    const workout = Object.assign({
      user_id: user.id,
      title: this.state.workout,
      description: this.state.descrption,
      popularity: 1,
    },{
      exercises: current.map(e => ({
        api_id: e.id,
        name: e.name,
        description: e.description,
        popularity: e.popularity || 1,
      }))
    })

    saveWorkout(workout);
  }

  render() {
    const { workout, description, randomAmount } = this.state

    return (
      <main className='workout-tab'>
        <section className='workout-build'>
          <h1 className='workout-tab-title'>Build Workout</h1>
          <div className="workout-titles">
            <label htmlFor='workout'>
              Workout Name:
            </label>
            <input
              type="text"
              name='workout'
              value={workout}
              placeholder='Enter a Workout Name'
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="workout-btn-container">
            <div className="randomize">
              <button
                className='workout-randomize-btn'
                value={randomAmount}
                onClick={this.randomize}>
                Randomize
              </button>
              <label htmlFor="randomNumber">Exercise Count:
                <input
                  onChange={(e) => this.handleChange(e)}
                  type="number"
                  name='randomAmount'
                  placeholder='exercises'
                  value={randomAmount}
                />
              </label>
            </div>
            <div>
              <button
                className='toggle-detail-btn'
                onClick={this.toggleDetail}>Show Detail
              </button>
              <button
                className="save-workout-btn"
                onClick={this.saveWorkout}>
                Save Workout
              </button>
            </div>
          </div>
          <div className="exercise-container">
            {this.buildExercises()}
          </div>

        </section>
        <section className='workout-popular'>
          <h1 className='workout-tab-title'>Exercise Detail</h1>
          <DetailViewContainer />
        </section>
      </main>
    )
  }
}
