import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import TimeInput from './TimeInput'
import DateTimeInput from './DateTimeInput'
import Label from './Label'

const AppointmentFieldSet = ({
	props, handlers, names
	}) => {
		const { name, location , date } = props
		const { handleTextChange, handleTimeChange } = handlers

		return (
			<fieldset className="AppointmentFieldSet">
				<legend>Create Appointment</legend>
					<Label className="Name" text="Name"
					element= <TextInput className="Name" value={name} onChange={handleTextChange} name={names[names.indexOf('name')]}/> 
					/>
					<Label className="Location" text="Location"
					element = <TextInput className="Location" value={location} onChange={handleTextChange} name={names[names.indexOf('location')]}/> 
					/>
					<DateTimeInput 
						text="Start"
						className="Start"
						dateInputValue={date}
						onChangeDate={handleTextChange}
						onChangeTime={handleTimeChange}
						timeInputName= {names[names.indexOf('start')]}
					  dateInputName= {names[names.indexOf('date')]}
					/>
					<Label className="End" text="End"
					element=<TimeInput onChange={handleTimeChange} name={names[names.indexOf('end')]}/> 
					/>
					<button type="submit" value="Submit">
						Add Date
					</button>
			</fieldset>
		)
	}

AppointmentFieldSet.propTypes = {
	props: PropTypes.object,
	handlers: PropTypes.object,
	names: PropTypes.array
}

export default AppointmentFieldSet
