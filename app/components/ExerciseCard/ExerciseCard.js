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
    const { changeExerciseProperty, id } = this.props;
    const { name, value } = e.target;

    changeExerciseProperty({popularity: value}, id);
  }

  handleChange (e) {
    const { changeExerciseProperty, id } = this.props;
    const { name, value } = e.target;

    changeExerciseProperty({[name]: value}, id);
  }

  getImages (e) {
    const { fetchImageUrls } = this.props;

    if (!(e.target.name === 'upvote' || e.target.name ==='downvote')) {
      fetchImageUrls(this.props);
    }
  }

  popularityClass(popularity) {
    let className = ''
    if (popularity < 1) {
      className = 'unpopular'
    } else if (popularity > 1) {
      className = 'popular'
    } else {
      className = 'neutral'
    }

    return className;
  }

  render() {
    const { id, name, description, fetchImageUrls, showDetail, active, popularity } = this.props;
    const { sets, reps, unit, measure, type, disabled } = this.props.statistics;
    const activeClass = active ? 'active' : ''

    return (
      <article className={`exercise-card ${activeClass} ${this.popularityClass(popularity)}`}>

        <header className='exercise-card-header' onClick={(e) => this.getImages(e)}>
          <h3 className='exercise-card-title'>{name}</h3>
          <div className="btn-helper">
            <div className="exercise-card-btn-container">
              <button
                name='upvote'
                value='2'
                onClick={(e) => this.handleClick(e)}
                className='exercise-card-btn'
                id='upvote'>Upvote
              </button>
              <button
                name='downvote'
                value='0'
                onClick={(e) => this.handleClick(e)}
                className='exercise-card-btn'
                id='downvote'>Downvote
              </button>
            </div>
          </div>
        </header>

        <div className='exercise-card-stats'>
          <div>
            <label htmlFor='sets'>Sets</label>
            <input type='text'
              name='sets'
              value={sets}
              disabled={disabled}
              onChange={(e)=>this.handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor='reps'>Reps</label>
            <input type='text'
              name='reps'
              value={reps}
              disabled={disabled}
              onChange={(e)=>this.handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor='unit'>{type}</label>
            <input type='text'
              name='unit'
              value={unit}
              disabled={disabled}
              onChange={(e)=>this.handleChange(e)}
            />
            <select name='measure' className='select' onChange={this.handleChange}>
              <option value='lbs'>lbs</option>
              <option value='kg'>kg</option>
            </select>
          </div>
        </div>

      </article>
    )
  }
}
