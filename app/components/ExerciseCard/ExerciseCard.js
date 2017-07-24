import React from 'react';

export const ExerciseCard = (props) => {
  const { name, description } = props;
  return (
    <article className="exercise-card">
      <h3 className="exercise-card-title">{name}</h3>
      <button>this will do something eventually</button>
    </article>
  )
}
