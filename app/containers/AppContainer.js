import { connect } from 'react-redux';
import App from '../components/App/App';
import { fetchUserSignUp } from '../actions'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    all: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserSignUp: (body) => dispatch(fetchUserSignUp(body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
