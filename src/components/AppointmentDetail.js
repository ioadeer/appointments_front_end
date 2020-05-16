import React from 'react'
import PropTypes from 'prop-types'

const AppointmentDetail = ({
	name, owner, date, start, end
}) => (
	<dl>
		<dt>Appointment name</dt>
		<dd>{ name }</dd>
		<dt>Owner</dt>
		<dd>{ owner }</dd>
		<dt>Date</dt>
		<dd>{ date }</dd>
		<dt>Start</dt>
		<dd>{ start }</dd>
		<dt>End</dt>
		<dd>{ end }</dd>
	</dl>
)

AppointmentDetail.propTypes = {
	name: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	start: PropTypes.string.isRequired,
	end: PropTypes.string.isRequired
}

export default AppointmentDetail
