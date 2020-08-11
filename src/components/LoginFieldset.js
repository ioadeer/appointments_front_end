import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import Label from './Label'
import classnames from 'classnames'

const LoginFieldset = ({
	props, handleChange, names, validFields
}) => {
	const { name, password } = props
	return (
		<fieldset className="LoginFieldSet">
			<legend>Log in</legend>
			{ !validFields.name &&
				<p className="error-message">Please enter valid name</p>
			}
			<Label 
			className={classnames('Name',{ invalid: !validFields.name})}
			text="Name"
			element= <TextInput className="Name" value={name} onChange={handleChange} name={names[names.indexOf('name')]}/> 
			/>
			{ !validFields.password &&
				<p className="error-message">Please enter valid password</p>
			}
			<Label 
			className={classnames('Password',{ invalid: !validFields.password})}
			text="Password"
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
	names: PropTypes.array.isRequired,
	validFields: PropTypes.object.isRequired
}

export default LoginFieldset
