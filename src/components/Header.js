import React from 'react'
import PropTypes from 'prop-types'
import AppointmentForm from './AppointmentForm'
import AppointmentFieldSet from './AppointmentFieldSet'

const Header = ({ addAppointment }) => (
	<header>
		<h1>Appointments app</h1>
		<AppointmentForm
			onSave={(data) => {
				addAppointment(data)
			}}
			inputComponent={<AppointmentFieldSet />}
		/>
	</header>
)

Header.propTypes = {
	addAppointment: PropTypes.func.isRequired
}

export default Header 
