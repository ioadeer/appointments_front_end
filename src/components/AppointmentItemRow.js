import React from 'react'
import PropTypes from 'prop-types'

const AppointmentItemRow = ({
	name, owner, date, start, end, location
}) => (
	<tr>
		<td>{name}</td>
		<td>{owner}</td>
		<td>{date}</td>
		<td>{start}</td>
		<td>{end}</td>
		<td>{location}</td>
	</tr>
)


AppointmentItemRow.propTypes = {
	name: PropTypes.string.isRequired,
	owner: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	start: PropTypes.string.isRequired,
	end: PropTypes.string.isRequired
}

export default AppointmentItemRow
