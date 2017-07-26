export default class Exercise {
  constructor(exercise) {
    this.id = exercise.id;
    this.name = exercise.name;
    this.description = exercise.description;
    this.popularity = exercise.popularity || 1;
    this.muscles = exercise.muscles;
    this.muscles_secondary = exercise.muscles_secondary;
    this.equipment = exercise.equpment;
    this.imageUrls = exercise.imageUrls;
    this.url = exercise.url;
  }
}
