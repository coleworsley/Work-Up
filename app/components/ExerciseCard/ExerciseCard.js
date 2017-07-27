import React, { Component } from 'react';
import './ExerciseCard.css';

export default class ExerciseCard extends Component {
  constructor() {
    super();
    this.state = {
      sets: 3,
      reps: 8,
      type: 'Weight',
      measure: 'lbs',
      unit: 180,
      disabled: true,
    }
  }

  updateState (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { id, name, description, fetchImageUrls, showDetail, active } = this.props;
    const { sets, reps, unit, measure, type, disabled } = this.state;
    return (
      <article
        className={`exercise-card ${active ? 'active' : ''}`}
        onClick={() => fetchImageUrls(this.props)}>
        <header className='exercise-card-header'>
          <h3 className='exercise-card-title'>{name}</h3>
          <div className="exercise-card-btn-container">
            <button className='exercise-card-btn'>EDIT</button>
            <button className='exercise-card-btn'>Lock</button>
          </div>
        </header>
        <div className='exercise-card-stats'>
          <label htmlFor='sets'>Sets</label>
          <input type='text'
            name='sets'
            value={sets}
            disabled={disabled}
            onChange={(e)=>this.updateState(e)}
          />
          <label htmlFor='reps'>Reps</label>
          <input type='text'
            name='reps'
            value={reps}
            disabled={disabled}
            onChange={(e)=>this.updateState(e)}
          />
          <label htmlFor='other'>{type}</label>
          <input type='text'
            name='unit'
            value={unit}
            disabled={disabled}
            onChange={(e)=>this.updateState(e)}
          />
          <label htmlFor='other'>{measure}</label>
        </div>
      </article>
    )
  }
}
