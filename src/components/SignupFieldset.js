import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import Label from './Label'

const SignupFieldset = ({
	props, handleChange, names
}) => {
	const { name, email, password, passwordRepeat } = props
	return (
		<fieldset className="SignupFieldSet">
			<legend>Sign up</legend>
			<Label className="Name" text="Name"
			element= <TextInput className="Name" value={name} onChange={handleChange} name={names[names.indexOf('name')]}/> 
			/>
			<Label className="Email" text="Email"
			element= <TextInput className="Email" value={email} onChange={handleChange} name={names[names.indexOf('email')]}/> 
			/>
			<Label className="Password" text="Password"
			element= <TextInput className="Password" value={password} onChange={handleChange} name={names[names.indexOf('password')]} type="password" /> 
			/>
			<Label className="Password" text="Password"
			element= <TextInput className="Password" value={passwordRepeat} onChange={handleChange} name={names[names.indexOf('passwordRepeat')]} type="password" /> 
			/>
			<button type="submit" value="Submit">
			Sign up	
			</button>
		</fieldset>
	)
}

SignupFieldset.propTypes = {
	props: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	names: PropTypes.array.isRequired
}

export default SignupFieldset
