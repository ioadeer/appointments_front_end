import React from 'react'
import AddAppointment from '../containers/AddAppointment'
import FilterMenu from '../components/FilterMenu'
import FilterMenuContainer from '../containers/FilterMenuContainer'
import LoginStatus from '../containers/LoginStatus'
import VisibleAppointmentList from '../containers/VisibleAppointmentList'

const App = ({ match: { params } }) => (
	<div>
		<LoginStatus />
		<AddAppointment />
		<FilterMenuContainer filter={params.filter || 'show_all'}/>
		<VisibleAppointmentList />
	</div>
)

export default App
