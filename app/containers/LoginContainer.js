import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { fetchUserSignUp, fetchUserLogin } from '../actions'

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserSignUp: (body) => dispatch(fetchUserSignUp(body)),
    fetchUserLogin: (body) => dispatch(fetchUserLogin(body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
