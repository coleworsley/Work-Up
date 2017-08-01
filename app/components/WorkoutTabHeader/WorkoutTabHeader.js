import React from 'react';

const WorkoutTabHeader = () => {
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

      </section>
    </header>
  )
}
