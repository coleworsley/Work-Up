import { connect } from 'react-redux';
import WorkoutTab from '../components/WorkoutTab/WorkoutTab';
import { fetchAPIExercises,
         fetchCategories,
         randomizeExercises,
         saveWorkout,
         fetchWorkouts,
         fetchImageUrls } from '../actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    exercises: state.exercises,
    workouts: state.workouts,
    detail: state.detail,
    categories: state.categories,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAPIExercises: (body) => dispatch(fetchAPIExercises(body)),
    randomizeExercises: (array, count) => dispatch(randomizeExercises(array, count)),
    saveWorkout: (body) => dispatch(saveWorkout(body)),
    fetchCategories: () => dispatch(fetchCategories()),
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    fetchImageUrls: (exercise_id) => dispatch(fetchImageUrls(exercise_id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutTab);
