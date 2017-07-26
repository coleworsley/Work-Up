export default class Workout {
  constructor(workout, user) {
    this.id = workout.id;
    this.user_id = user.id;
    this.title = workout.title || 'Test Workout';
    this.description = workout.description || '';
    this.popularity = workout.popularity || 1;
    this.exercises = workout.exercises;
  }
}
