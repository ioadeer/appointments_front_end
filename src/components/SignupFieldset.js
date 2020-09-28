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
		<div className="col s12 SignupFieldSet">
			<h4 style={{textAlign:"center"}}>Sign up</h4>
			<Label 
				className="input-field col s12 Name-input Name" 
				text="Name"
				element= <TextInput 
									placeholder={!validFields.name.touched ? '' : 'Please enter valid name' }
									value={name} 
									onChange={handleChange} 
									name={names[names.indexOf('name')]}
									isInputRequired={true}
				/> 
			/>
			<Label className="input-field col s12 Email-input Email" text="Email"
			element= <TextInput 
									placeholder={!validFields.email.touched ? '' : 'Enter a valid email' }
									value={email} 
									onChange={handleChange} 
									name={names[names.indexOf('email')]}
									isInputRequired={true}
				/> 
			/>
			<Label className="input-field col s12 Password-input Password" text="Password"
			element= <TextInput 
									className="Password" 
									value={password} 
									onChange={handleChange} 
									name={names[names.indexOf('password')]} 
									type="password" 
									isInputRequired={true}
				/> 
			/>
			<Label className="input-field col s12 Password-input Password" text="Password"
			element= <TextInput 
									className="Password" 
									value={passwordRepeat} 
									onChange={handleChange} 
									name={names[names.indexOf('passwordRepeat')]} 
									type="password" 
									isInputRequired={true}
				/> 
			/>
		 <div className="ButtonContainer" >
                <button
                  style={{

										textAlign: "center",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                Sign Up 
                </button>
              </div>
		</div>
	)
}

SignupFieldset.propTypes = {
	props: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	names: PropTypes.array.isRequired,
	validFields: PropTypes.object,
}

export default SignupFieldset
