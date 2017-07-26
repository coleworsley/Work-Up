import { connect } from 'react-redux';
import WorkoutTab from '../components/WorkoutTab/WorkoutTab';
import { fetchAPIExercises,
         randomizeExercises,
         saveWorkout,
         fetchWorkouts,
         fetchImageUrls } from '../actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    exercises: state.exercises,
    workouts: state.workouts,
    detail: state.detail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAPIExercises: (body) => dispatch(fetchAPIExercises(body)),
    randomizeExercises: (array, count) => dispatch(randomizeExercises(array, count)),
    saveWorkout: (body) => dispatch(saveWorkout(body)),
    fetchWorkouts: () => dispatch(fetchWorkouts()),
    fetchImageUrls: (exercise_id) => dispatch(fetchImageUrls(exercise_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutTab);
