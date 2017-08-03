import React from 'react';
import './ExerciseList.css';
import { Link } from 'react-router-dom';
import ExerciseCard from '../ExerciseCard/ExerciseCard'

export const ExerciseList = () => {
  const ExerciseCards = <ExerciseCard />

  return (
    <section className='exercise-list-container'>
      <nav className="tabs">
        <Link to='/workouts/search'>Search</Link>
        <Link to='/workouts/exercises'>Exercises</Link>
      </nav>
      <div className="exercise-list">
        <header className="exercise-list-header">
          <h3 className="exercise-list-workout">Workout Name</h3>
          <button>Randomize</button>
          <button>Save Workout</button>
        </header>
        <main className="exercise-card-container">
          {ExerciseCards}
        </main>

      </div>

    </section>
  )
}
