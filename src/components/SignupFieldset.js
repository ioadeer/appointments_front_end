import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput'
import Label from './Label'
import classnames from 'classnames'

const SignupFieldset = ({
	props, handleChange, names, validFields,
}) => {
	const { name, email, password, passwordRepeat } = props
	return (
		<fieldset className="SignupFieldSet">
			<legend>Sign up</legend>
			<Label className="Name" text="Name"
			element= <TextInput 
									className={classnames('TextInput',{ invalid: !validFields.name.valid && validFields.name.touched})}
									placeholder={!validFields.name.touched ? '' : 'Please enter valid name' }
									value={name} 
									onChange={handleChange} 
									name={names[names.indexOf('name')]}
				/> 
			/>
			<Label className="Email" text="Email"
			element= <TextInput 
									className={classnames('TextInput',{ invalid: !validFields.email.valid && validFields.email.touched })}
									placeholder={!validFields.email.touched ? '' : 'Enter a valid email' }
									value={email} 
									onChange={handleChange} 
									name={names[names.indexOf('email')]}
				/> 
			/>
			<Label className="Password" text="Password"
			element= <TextInput 
									className="Password" 
									value={password} 
									onChange={handleChange} 
									name={names[names.indexOf('password')]} 
									type="password" 
				/> 
			/>
			<Label className="Password" text="Password"
			element= <TextInput 
									className="Password" 
									value={passwordRepeat} 
									onChange={handleChange} 
									name={names[names.indexOf('passwordRepeat')]} 
									type="password" 
				/> 
			/>
			<div className="ButtonContainer">
				<button type="submit" value="Submit">
				Sign up	
				</button>
			</div>
		</fieldset>
	)
}

SignupFieldset.propTypes = {
	props: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	names: PropTypes.array.isRequired,
	validFields: PropTypes.object,
}

export default SignupFieldset
