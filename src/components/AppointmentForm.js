import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { validateTextInput } from './validation/TextInputValidation'

export default class AppointmentForm extends Component {
	static  propTypes = {
		onSave: PropTypes.func.isRequired,
		name : PropTypes.string,
		owner: PropTypes.string,
		date : PropTypes.string,
		start: PropTypes.string,
		end  : PropTypes.string,
		inputComponent: PropTypes.element
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
			owner: {
				value: this.props.owner || '',
				placeholder: '',
				valid: false,
				touched: false,
			},
			date: {
				value: this.props.date  || '',
				placeholder: '',
				valid: false,
				touched: false,
			},
			start: {
				value:this.props.start  || '',
				placeholder: '',
				valid: true,
				touched: false,
			},
			end: {
				value: this.props.end   || '',
				placeholder: '',
				valid: true,
				touched: false,
			}
		},
		validationRules: {
			name: {
				minLength:3,
				isRequired: true
			},
			owner: {
				minLength:3,
				isRequired: true
			},
			date: {
				minLength:3,
				isRequired: true
			},
			start: {
				minLength:3,
			},
			end: {
				minLength:3,
			}
		}
	}

	componentDidMount(){
		// set initial state of valid to true if component is Appointment Edit 
		let component = this.props.inputComponent;
		if(component.type.name ==="AppointmentEdit"){
			const formControls= {
				...this.state.formControls
			}
			for( let [ key, value ] of Object.entries(formControls)){
				const updatedField = {
					...formControls[key]
				}
				updatedField.valid = true;
				formControls[key] = updatedField;
				this.setState( { 
					formControls: formControls
				})
			}
		}
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
			this.props.onSave(data);

			for( let [ key ] of Object.entries(formControls)){
				const updatedField = {
					...formControls[key]
				}
				updatedField.value = '';
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

	handleTimeChange = (e, n) => {
		if(e === null) { return }
		const name = n.name;
		const value = e.format('HH:mm:00');
		this.validateInput(name,value,validateTextInput);
	}

	render() {

		const names = Object.keys(this.state.formControls);
		const handlers = {
			handleTextChange: this.handleTextChange,  
			handleTimeChange: this.handleTimeChange
		}
		let values;

		for( let [ key, value ] of Object.entries(this.state.formControls)){
			values= {...values, [key] : value.value};
		}

		return(
			
			<form onSubmit={
				this.handleSubmit
			} className="AppointmentForm">
				{React.cloneElement(this.props.inputComponent,
						{ props:values, names:names , handlers:handlers})}
			</form>
		)
	}
}

