import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import TimeInput from './TimeInput'
import DateTimeInput from './DateTimeInput'
import Label from './Label'
import classnames from 'classnames'

const AppointmentFieldSet = ({
	props, handlers, names, validFields
	}) => {
		const { name, location , date } = props
		const { handleTextChange, handleTimeChange } = handlers
		const validDateTime = validFields.date && validFields.start

		return (
			<div className="AppointmentFieldSet">
				<h4 style={{textAlign:"center"}}>Create an appointment</h4>
					<Label 
						className={classnames('input-field col s12 Name-input Name',{ invalid: !validFields.name.valid && validFields.name.touched})}
						text="Name"
						element= <TextInput 
							id="name"
							value={name} 
							onChange={handleTextChange} 
							name={names[names.indexOf('name')]}
							placeholder={!validFields.name.touched ? '' : 'Please enter valid name' }
							isInputRequired={true}
							/> 
					/>
					<Label 
						className={classnames('input-field col s12 Location-input Location',{ invalid: !validFields.location.valid && validFields.location.touched})}
						text="Location"
						element = <TextInput 
							//className={classnames('TextInput',{ invalid: !validFields.location.valid && validFields.location.touched })}
							value={location} 
							onChange={handleTextChange} 
							name={names[names.indexOf('location')]}
							placeholder={!validFields.location.touched ? '' : 'Enter a valid location' }
							isInputRequired={true}
							/> 
					/>
					<div className={classnames({ 'DateTimeInput-invalid': !validFields.date.valid && !validFields.time.valid  && validFields.date.touched && validFields.start.touched })}>
					<DateTimeInput 
						text="Start"
						className={classnames('Start',{ invalid: !validFields.date })}
						isValid={validDateTime}
						dateInputValue={date}
						onChangeDate={handleTextChange}
						onChangeTime={handleTimeChange}
						timeInputName= {names[names.indexOf('start')]}
					  dateInputName= {names[names.indexOf('date')]}
					/>
					<Label className="End" text="End"
					element=<TimeInput onChange={handleTimeChange} name={names[names.indexOf('end')]}/> 
					/>
					{!validFields.time.valid && validFields.start.touched && validFields.end.touched &&
						<p className="error-message"><i>Start time should be earlier than end time</i></p>
					}
					</div>
		 <div className="ButtonContainer" >
                <button
                  style={{

										textAlign: "center",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                 Add Date 
                </button>
              </div>
			</div>
		)
	}

AppointmentFieldSet.propTypes = {
	props: PropTypes.object,
	handlers: PropTypes.object,
	names: PropTypes.array,
	validFields: PropTypes.object
}

export default AppointmentFieldSet
