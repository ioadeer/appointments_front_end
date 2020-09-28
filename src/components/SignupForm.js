import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { validateTextInput } from './validation/TextInputValidation'
import SignupFieldset from './SignupFieldset'
import ErrorLog from './ErrorLog'

export default class SignupForm extends Component {
	static  propTypes = {
		name : PropTypes.string,
		email: PropTypes.string,
		password: PropTypes.string,
		passwordRepeat: PropTypes.string,
		errors: PropTypes.object,
	}
	
	state = {
		errors: this.props.errors,
		valid: false,
		formControls: {
			name: {
				value: this.props.name  || '',
				placeholder: '',
				valid: false,
				touched: false,
			},
			email: {
				value: this.props.name  || '',
				placeholder: '',
				valid: false,
				touched: false,
			},
			password: {
				value: this.props.owner || '',
				placeholder: '',
				valid: false,
				touched: false,
			},
			passwordRepeat: {
				value: this.props.owner || '',
				placeholder: '',
				valid: false,
				touched: false,
			},
		},
		validationRules: {
			name: {
				minLength:1,
				isRequired: true
			},
			email: {
				minLength:1,
				isRequired: true,
				checkEmailValidity: true
			},
			password: {
				minLength:1,
				isRequired: true
			},
			passwordRepeat: {
				minLength:3,
				isRequired: true
			},
		},
	}

	handleSubmit = e => {
		e.preventDefault();
		let data;
		let isFormValid = true;
		
		const formControls= {
			...this.state.formControls
		}
		for( let [ key ] of Object.entries(formControls)){
			isFormValid = isFormValid && formControls[key].valid; 
		}
		this.setState({ valid: isFormValid });
		if(isFormValid){
			for( let [ key, value ] of Object.entries(formControls)){
				data = {...data, [key] : value.value};
			}
			this.props.onSubmit(data);
		}else {
			const formControls= {
				...this.state.formControls
			}
			for( let [ key, value ] of Object.entries(formControls)){
				const updatedField = {
					...formControls[key]
				}
				updatedField.touched= true;
				formControls[key] = updatedField;
				this.setState( { 
					formControls: formControls
				})
			}
		}
	}

	validateInput = (name, value, validationFunction) => {

		const updatedControls = {
			...this.state.formControls
		};

		const updatedFormElement = {
			...updatedControls[name]	
		};

		const validationRules = {
			...this.state.validationRules[name]
		}
		updatedFormElement.value = value;
		updatedFormElement.touched = true;
		updatedFormElement.valid = validationFunction(value, 
																validationRules);
		updatedControls[name] = updatedFormElement;

		this.setState({
			formControls: updatedControls
		});

	}

	handleTextChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		this.validateInput(name, value,validateTextInput);
	}

	render() {

		const names = Object.keys(this.state.formControls);
		let values;
		for( let [ key, value ] of Object.entries(this.state.formControls)){
			values= {...values, [key] : value.value};
		}
		const errors = this.props.errors;
		const errors_log = []
		if(errors){
			for( const error in errors){
				errors[error].map((item,index,arr) => {
					errors_log.push(<ErrorLog value={item} key={error+index}/>)		
				})
			}	
		}

		let validFields;

		for( let [ key, field ] of Object.entries(this.state.formControls)){
				validFields= {...validFields, [key] : {valid : field.valid , touched : field.touched}};
		}

		return(
			<div className="container">
				<div style={{ marginTop: "4rem"}} className="row">
					<div className="col s8 offset-s2">
						<form onSubmit={
							this.handleSubmit
						} className="col s12 SignupForm">
							<SignupFieldset
								props={values}
								handleChange={this.handleTextChange}
								names={names}
								validFields={validFields}
							/>
						</form>
						{ errors &&
							<ul className="signup-errors">
							{ errors_log }
							</ul>
						}
					</div>
				</div>
			</div>
		)
	}
}

