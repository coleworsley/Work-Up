import { connect } from 'react-redux';
import WorkoutTab from '../components/WorkoutTab/WorkoutTab';
import { fetchAPIExercises, randomizeExercises, saveWorkout } from '../actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    exercises: state.exercises,
    workouts: state.workouts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAPIExercises: (body) => dispatch(fetchAPIExercises(body)),
    randomizeExercises: (array, count) => dispatch(randomizeExercises(array, count)),
    saveWorkout: (body) => dispatch(saveWorkout(body)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutTab);
