import React from 'react'
import PropTypes from 'prop-types'
import DateInput from './DateInput'
import TimeInput from './TimeInput'

const DateTimeInput = ({
	text, className, dateInputValue,onChangeDate, onChangeTime, timeInputName, dateInputName
	}) => (
		<label className={className}>
			{text}
			<TimeInput onChange={onChangeTime} name={timeInputName}/>
			<DateInput value={dateInputValue} onChange={onChangeDate} name={dateInputName}/>
		</label>
	)

DateTimeInput.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
	dateInputValue: PropTypes.string.isRequired,
	onChangeDate: PropTypes.func.isRequired,
	onChangeTime: PropTypes.func.isRequired,
	timeInputName: PropTypes.string,
	dateInputName: PropTypes.string
}

export default DateTimeInput
