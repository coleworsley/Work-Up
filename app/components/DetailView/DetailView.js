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
        <h3 className='detail-tab-title'>{name}</h3>
        <h4>Category: {category.name}</h4>
        <ExerciseImage imageUrls={imageUrls}/>

        <div className='description-section'>
          <h4>Exercise Description: </h4>
          <div className="detail-description"
            dangerouslySetInnerHTML={{ __html: description }}>
          </div>
        </div>
        <div className='muscles-section'>
          <h4>Muscles Worked: </h4>
          <p>{muscles.map(e => e.name).join(', ')}</p>
        </div>
        <div className='equipment-section'>
          <h4>Equipment Needed : </h4>
          <p>{equipment.map(e => e.name).join(', ')}</p>
        </div>
      </div>
    )
  }
}
