import React from 'react';
import { PieChart } from '../PieChart/PieChart';
import './WorkoutTabHeader.css';

export const WorkoutTabHeader = () => {
  return (
    <header className="workout-tab-header">
      <section className="workout-tab-title-description">
        <div className="workout-tab-title-box">
          <img src="hamburger-menu" alt="hamburger-menu" className='menu-icon'/>
          <h2 className='workout-tab-title-text'>Workout Page</h2>
        </div>
        <div className="workout-tab-description-box">
          <h3 className="workout-tab-description">Description</h3>
          <p className="workout-tab-description-text">
            Select your exercises using the search or randomize feature. As you upvote or downvote more exercises, WorkUp's algorithm will make smarter suggestions for your workout.
          </p>
        </div>
      </section>
      <section className="workout-tab-summary">
        <div className="workout-tab-summary-box">
          <table>
            <tbody>
              <tr>
                <td>Arms:</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>Legs:</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Abs:</td>
                <td>25%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <PieChart />
      </section>
    </header>
  )
}
