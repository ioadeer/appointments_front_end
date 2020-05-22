import React from 'react'
import PropTypes from 'prop-types'

const TextInput =({
	 className, value, onChange, placeholder, name
}) => (
		<input className={className} type="text" value={value} onChange={onChange} placeholder={placeholder} name={name}/>
)

TextInput.propTypes =  {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string,
	className: PropTypes.string,
	placeHolder: PropTypes.string
}

export default TextInput
