import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import Label from './Label'

const LoginFieldset = ({
	props, handleChange, names
}) => {
	const { name, password } = props
	return (
		<fieldset className="LoginFieldSet">
			<legend>Log in</legend>
			<Label className="Name" text="Name"
			element= <TextInput className="Name" value={name} onChange={handleChange} name={names[names.indexOf('name')]}/> 
			/>
			<Label className="Password" text="Password"
			element= <TextInput className="Password" value={password} onChange={handleChange} name={names[names.indexOf('password')]} type="password" /> 
			/>
			<button type="submit" value="Submit">
			Log in	
			</button>
		</fieldset>
	)
}

LoginFieldset.propTypes = {
	props: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	names: PropTypes.array.isRequired
}

export default LoginFieldset
