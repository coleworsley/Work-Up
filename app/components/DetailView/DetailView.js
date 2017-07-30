import React, { Component } from 'react';
import './DetailView.css'
import ExerciseImage from '../ExerciseImage/ExerciseImage';

export class DetailView extends Component {
  render() {
    if (!Object.keys(this.props.detail).length) {
      return (
        <div className='detail-view'>
          <h3 className='detail-placeholder'>Please Select a workout to view Detail</h3>
        </div>
      )
    }

    const { name,
            description,
            equipment,
            category,
            muscles,
            imageUrls } = this.props.detail;

    return (
      <div className='detail-view'>
        <h3 className='workout-tab-title'>{name}</h3>
        <h4>Category: {category.name}</h4>
        <ExerciseImage imageUrls={imageUrls}/>
        <div className="detail-description"
          dangerouslySetInnerHTML={{ __html: description }}>
        </div>
        <p>Muscles Worked: {muscles.map(e => e.name).join(', ')}</p>
        <p>Equipment Needed: {equipment.map(e => e.name).join(', ')}</p>
      </div>
    )
  }
}
