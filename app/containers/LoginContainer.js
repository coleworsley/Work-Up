import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { fetchUserSignUp } from '../actions'

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserSignUp: (body) => dispatch(fetchUserSignUp(body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
