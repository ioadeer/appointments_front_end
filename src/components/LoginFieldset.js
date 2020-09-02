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
			<Label 
				className={classnames('Name',{ invalid: !validFields.name})}
				text="Name"
				element= <TextInput 
					className={classnames('Name-input',{ invalid: !validFields.name})} 
					value={name} 
					onChange={handleChange} 
					name={names[names.indexOf('name')]} 
					placeholder={validFields.name ? '' : 'Please enter valid name' }
				/> 
			/>
			<Label 
			className={classnames('Password',{ invalid: !validFields.password})}
			text="Password"
			element= <TextInput className="Password" value={password} onChange={handleChange} name={names[names.indexOf('password')]} type="password" placeholder={validFields.name ? '' : 'Please enter valid password' }/> 
			/>
			<div className="ButtonContainer">
			<button type="submit" value="Submit">
			Log in	
			</button>
			</div>
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
