import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import TimeInput from './TimeInput'
import DateInput from './DateInput'

const AppointmentEdit = ({ 
	props, handlers, names, validFields
	}) => {
		const { name, location , date, start, end } = props
		const { handleTextChange, handleTimeChange } = handlers
		return (
			<dl>
				<dt>Appointment name</dt>
				<dd><TextInput
							value={name} 
							placeholder={validFields.name ? '' : 'Please enter valid name' }
							onChange={handleTextChange} 
							name={names[names.indexOf('name')]}/>
				</dd>
				<dt>Location</dt>
				<dd><TextInput value={location} onChange={handleTextChange} name={names[names.indexOf('location')]}/></dd>
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
	names: PropTypes.array,
	validFields: PropTypes.object,
}

export default AppointmentEdit
