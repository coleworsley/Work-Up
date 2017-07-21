import { connect } from 'react-redux';
import Nav from '../components/Nav/Nav';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}



export default connect(mapStateToProps, null)(Nav);
