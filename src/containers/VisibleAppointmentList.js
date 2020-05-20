import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppointmentList from '../components/AppointmentList'
import { getVisibleAppointments } from '../selectors'
import * as AppointmentActions from '../actions'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state,ownProps) => ({
	filteredAppointments: getVisibleAppointments(state)	
})

const mapDispatchToProps = (dispatch,ownProps) => ({
	actions: bindActionCreators(AppointmentActions, dispatch),
})

const VisibleAppointmentList = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppointmentList)

export default VisibleAppointmentList
