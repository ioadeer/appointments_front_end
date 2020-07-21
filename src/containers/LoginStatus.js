import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { logout } from '../actions/auth'

const mapStateToProps = (state) => ({
	username: state.auth.access.name,
})

const mapDispatchToProps = (dispatch) => ({
	logout: () => { dispatch(logout()) }
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar)
