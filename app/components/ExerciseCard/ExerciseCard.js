import React, { Component } from 'react';
import './ExerciseCard.css';

export default class ExerciseCard extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    const { name, description } = this.props;
    return (
      <article className='exercise-card'>
        <header className='exercise-card-header'>
          <h3 className='exercise-card-title'>{name}</h3>
          <button className='exercise-card-btn'>EDIT</button>
          <button className='exercise-card-btn'>Lock</button>
        </header>
        <div className='exercise-card-stats'>
          <label htmlFor='sets'>Sets</label>
          <input type='text' name='sets' value='3'/>
          <label htmlFor='sets'>Reps</label>
          <input type='text' name='reps' value='8'/>
          <label htmlFor='sets'>Weight</label>
          <input type='text' name='reps' value='100tons'/>
        </div>
      </article>
    )
  }
}
