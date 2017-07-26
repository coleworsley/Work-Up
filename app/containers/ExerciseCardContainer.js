import { connect } from 'react-redux';
import ExerciseCard from '../components/ExerciseCard/ExerciseCard';
import { fetchImageUrls, showDetail } from '../actions';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImageUrls: (exercise_id) => dispatch(fetchImageUrls(exercise_id)),
    showDetail: (exercise) => dispatch(showDetail(exercise))
  }
}
export default connect(null, mapDispatchToProps)(ExerciseCard);
