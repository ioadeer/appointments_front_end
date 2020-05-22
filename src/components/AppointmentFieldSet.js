import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import TimeInput from './TimeInput'
import DateTimeInput from './DateTimeInput'
import Label from './Label'

const AppointmentFieldSet = ({
	props, handlers, names
	}) => {
		const { name, owner, date } = props
		const { handleTextChange, handleTimeChange } = handlers

		return (
			<fieldset className="AppointmentFieldSet">
				<legend>Create Appointment</legend>
					<Label className="Name" text="Name"
					element= <TextInput className="Name" value={name} onChange={handleTextChange} name={names[names.indexOf('name')]}/> 
					/>
					<Label className="Owner" text="Owner"
					element = <TextInput className="Owner" value={owner} onChange={handleTextChange} name={names[names.indexOf('owner')]}/> 
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
