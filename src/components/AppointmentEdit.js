import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import TimeInput from './TimeInput'
import DateInput from './DateInput'
import classnames from 'classnames'

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
							className={classnames('TextInputEdit',{ invalid: !validFields.name.valid})}
							placeholder={validFields.name.valid ? '' : 'Please enter valid name' }
							onChange={handleTextChange} 
							//isInputRequired={true}
							name={names[names.indexOf('name')]}/>
				</dd>
				<dt>Location</dt>
				<dd><TextInput
							value={location} 
							className={classnames('TextInputEdit',{ invalid: !validFields.location.valid})}
							placeholder={validFields.location.valid ? '' : 'Please enter valid location' }
							onChange={handleTextChange} 
							//isInputRequired={true}
							name={names[names.indexOf('location')]}/>
				</dd>
				<dt>Date</dt>
				<dd className={classnames('DateInput', {invalid: !validFields.date.valid })}>
				<DateInput value={date} onChange={handleTextChange} name={names[names.indexOf('date')]}/>
				</dd>
				<dt>Start</dt>
				<dd><TimeInput time={start} onChange={handleTimeChange} name={names[names.indexOf('start')]}/></dd>
				<dt>End</dt>
				<dd><TimeInput time={end} onChange={handleTimeChange} name={names[names.indexOf('end')]}/></dd>
					{!validFields.time.valid &&
						<p className="error-message"><i>Start time should be earlier than end time</i></p>
					}
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
