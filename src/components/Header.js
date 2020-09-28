import React from 'react'
import PropTypes from 'prop-types'
import AppointmentForm from './AppointmentForm'
import AppointmentFieldSet from './AppointmentFieldSet'

const Header = ({ addAppointment }) => (
	<header className="contianer">
		<div style={{ marginTop: "1rem" }} className="row">
			<div className="col s8 offset-s2">
				<AppointmentForm
					onSave={(data) => {
						addAppointment(data)
					}}
					inputComponent={<AppointmentFieldSet />}
				/>
			</div>
		</div>
	</header>
)

Header.propTypes = {
	addAppointment: PropTypes.func.isRequired
}

export default Header 
