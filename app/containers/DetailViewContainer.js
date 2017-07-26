import { connect } from 'react-redux'
import { DetailView } from '../components/DetailView/DetailView'


const mapStateToProps = (state) => {
  return {
    detail: state.detail,
  }
}

export default connect(mapStateToProps, null)(DetailView)
