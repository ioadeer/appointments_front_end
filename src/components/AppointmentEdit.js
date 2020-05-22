import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import TimeInput from './TimeInput'
import DateInput from './DateInput'

const AppointmentEdit = ({ 
	props, handlers, names
	}) => {
		const { name, owner, date, start, end } = props
		const { handleTextChange, handleTimeChange } = handlers
		return (
			<dl>
				<dt>Appointment name</dt>
				<dd><TextInput value={name} placeholder={name} onChange={handleTextChange} name={names[names.indexOf('name')]}/></dd>
				<dt>Owner</dt>
				<dd><TextInput value={owner} onChange={handleTextChange} name={names[names.indexOf('owner')]}/></dd>
				<dt>Date</dt>
				<dd><DateInput value={date} onChange={handleTextChange} name={names[names.indexOf('date')]}/></dd>
				<dt>Start</dt>
				<dd><TimeInput time={start} onChange={handleTimeChange} name={names[names.indexOf('start')]}/></dd>
				<dt>End</dt>
				<dd><TimeInput time={end} onChange={handleTimeChange} name={names[names.indexOf('end')]}/></dd>
				<button type="submit" value="Submit">Update</button>
			</dl>
		)
	}

AppointmentEdit.propTypes = {
	props: PropTypes.object,
	handlers: PropTypes.object,
	names: PropTypes.array
}

export default AppointmentEdit
