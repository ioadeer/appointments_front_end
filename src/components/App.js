import React from 'react'
import AddAppointment from '../containers/AddAppointment'
import FilterMenu from '../components/FilterMenu'
import VisibleAppointmentList from '../containers/VisibleAppointmentList'

const App = ({ match: { params } }) => (
	<div>
		<AddAppointment />
		<FilterMenu />
		<VisibleAppointmentList filter={params.filter || 'SHOW_ALL'}/>
	</div>
)

export default App
