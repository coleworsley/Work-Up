import { connect } from 'react-redux';
import ExerciseCard from '../components/ExerciseCard/ExerciseCard';
import { fetchImageUrls, showDetail, changeExerciseProperty } from '../actions';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImageUrls: (exercise_id) => dispatch(fetchImageUrls(exercise_id)),
    showDetail: (exercise) => dispatch(showDetail(exercise)),
    changeExerciseProperty: (exercise, id) => dispatch(changeExerciseProperty(exercise, id)),

  }
}
export default connect(null, mapDispatchToProps)(ExerciseCard);
