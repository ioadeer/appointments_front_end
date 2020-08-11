import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { validateTextInput } from './validation/TextInputValidation'
import LoginFieldset from './LoginFieldset'

export default class LoginForm extends Component {
	static  propTypes = {
		name : PropTypes.string,
		password: PropTypes.string,
	}
	
	state = {
		valid: true,
		formControls: {
			name: {
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
		},
		validationRules: {
			name: {
				minLength:1,
				isRequired: true
			},
			password: {
				minLength:1,
				isRequired: true
			},
		},
		errors: this.props.errors,
	}

	handleSubmit = e => {
		e.preventDefault();
		let isFormValid = true;
		let name;
		let pass;
		
		const formControls= {
			...this.state.formControls
		}
		for( let [ key ] of Object.entries(formControls)){
			isFormValid = isFormValid && formControls[key].valid; 
		}
		this.setState({ valid: isFormValid });
		if(isFormValid){
			name = formControls['name'].value;
			pass = formControls['password'].value;		
			this.props.onSubmit(name, pass);
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
		let validFields;
		for( let [ key, field ] of Object.entries(this.state.formControls)){
			validFields= {...validFields, [key] : field.valid || this.state.valid };
		}

		return(
			
			<form onSubmit={
				this.handleSubmit
			} className="LoginForm">
				<LoginFieldset
					props={values}
					handleChange={this.handleTextChange}
					names={names}
					validFields = {validFields}
				/>
			</form>
		)
	}
}

