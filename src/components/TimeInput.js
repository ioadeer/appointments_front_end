import React from 'react'
import PropTypes from 'prop-types'
import 'rc-time-picker/assets/index.css'

import moment from 'moment'
import TimePicker from 'rc-time-picker'

const now = moment().hour(0).minute(0);
const format = 'HH:mm a';

const TimeInput = ({
		onChange, time, name 
	}) => {
		let timeInput = time ? moment(time, 'HH:mm') : null
		const varName  = { name } 
		return (
			<TimePicker
				showSecond = { false }
				defaultValue = { timeInput ? timeInput : now} 
				className = 'xxx'
				onChange = {(e) => onChange(e, varName)}
				format = { format }
				name = { name }
				use12Hours
			/>
		)
}

TimeInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	time: PropTypes.string,
	name: PropTypes.string.isRequired,
}

export default TimeInput
