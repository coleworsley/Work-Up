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
      disabled: false,

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    const { name, value } = e.target;
    this.setState({ [name]: parseInt(value)})
  }

  handleChange (e) {
    const { changeExerciseProperty, id } = this.props;
    const { name, value } = e.target
    // debugger
    changeExerciseProperty({[name]: value}, id)
    // this.setState({ [name]: value })
  }

  getImages () {
    const { imageUrls, fetchImageUrls } = this.props;
    fetchImageUrls(this.props)
  }

  render() {
    const { id, name, description, fetchImageUrls, showDetail, active } = this.props;
    const { sets, reps, unit, measure, type, disabled } = this.props.statistics;

    return (
      <article className={`exercise-card ${active ? 'active' : ''}`}>

        <header className='exercise-card-header'>
          <h3 className='exercise-card-title'>{name}</h3>
          <div className="exercise-card-btn-container">
            <button
              name='upvote'
              value='1'
              onClick={(e) => this.handleClick(e)}
              className='exercise-card-btn'>
              Upvote</button>
            <button
              name='downvote'
              value='-1'
              onClick={(e) => this.handleClick(e)}
              className='exercise-card-btn'>
              Downvote</button>
          </div>

          <button
            className='exercise-card-show-detail'
            onClick={() => this.getImages()}>
            Show Detail
          </button>
        </header>

        <div className='exercise-card-stats'>
          <label htmlFor='sets'>Sets</label>
          <input type='text'
            name='sets'
            value={sets}
            disabled={disabled}
            onChange={(e)=>this.handleChange(e)}
          />
          <label htmlFor='reps'>Reps</label>
          <input type='text'
            name='reps'
            value={reps}
            disabled={disabled}
            onChange={(e)=>this.handleChange(e)}
          />
          <label htmlFor='unit'>{type}</label>
          <input type='text'
            name='unit'
            value={unit}
            disabled={disabled}
            onChange={(e)=>this.handleChange(e)}
          />
          <select name='' id=''>
            <option value='lbs'>lbs</option>
            <option value='kg'>kg</option>
          </select>
          <input
            type="dropdown"
            value={measure}
          />
        </div>

      </article>
    )
  }
}
