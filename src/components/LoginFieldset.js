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
		<div className='col s12'>
			<h4>Login</h4>
			<Label 
				className={classnames('input-field col s12 Name-input Name',{ invalid: !validFields.name})}
				text="Name"
				htlmFor="name"
				element= <TextInput 
					className={classnames('Name',{ invalid: !validFields.name})} 
					value={name} 
					onChange={handleChange} 
					name={names[names.indexOf('name')]} 
					placeholder={validFields.name ? '' : 'Please enter valid name' }
				/> 
			/>
			<Label 
			className={classnames('input-field col s12 Password-input Password',{ invalid: !validFields.password})}
			text="Password"
			element= <TextInput 
				className="Password" 
				value={password} 
				onChange={handleChange} 
				name={names[names.indexOf('password')]} 
				type="password" 
				placeholder={validFields.name ? '' : 'Please enter valid password' }/> 
			/>
		 <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{

                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>

		</div>
	)
}

LoginFieldset.propTypes = {
	props: PropTypes.object.isRequired,
	handleChange: PropTypes.func.isRequired,
	names: PropTypes.array.isRequired,
	validFields: PropTypes.object.isRequired
}

export default LoginFieldset
