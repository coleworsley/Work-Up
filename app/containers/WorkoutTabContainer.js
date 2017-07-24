import { connect } from 'react-redux';
import WorkoutTab from '../components/WorkoutTab/WorkoutTab';
import { fetchAPIExercises, randomizeExercises } from '../actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    exercises: state.exercises,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAPIExercises: (body) => dispatch(fetchAPIExercises(body)),
    randomizeExercises: (array, count) => dispatch(randomizeExercises(array, count))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutTab);
