import React from 'react'
import PropTypes from 'prop-types'

const DateInput =({
	 value, onChange, name
}) => (
		<input type="date" value={value} onChange={onChange} name={name}/>
)

DateInput.propTypes =  {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string
}

export default DateInput
