export default class Exercise {
  constructor(exercise) {
    this.name = exercise.name;
    this.description = exercise.description;
    this.popularity = exercise.popularity || 1;
  }
}
