import React from 'react'
import PropTypes from 'prop-types'

const TextInput =({
	 className, value, onChange, placeholder, name, type
}) => (
		<input className={className} value={value} onChange={onChange} placeholder={placeholder} name={name} type={type}/>
)

TextInput.propTypes =  {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string,
	className: PropTypes.string,
	placeHolder: PropTypes.string,
	type: PropTypes.string
}

export default TextInput
