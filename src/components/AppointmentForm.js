import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { validateTextInput } from './validation/TextInputValidation'

export default class AppointmentForm extends Component {
	static  propTypes = {
		onSave: PropTypes.func.isRequired,
		name : PropTypes.string,
		location : PropTypes.string,
		date : PropTypes.string,
		start: PropTypes.string,
		end  : PropTypes.string,
		inputComponent: PropTypes.element
	}
	
	state = {
		valid: false,
		formControls: {
			name: {
				value: this.props.name  || '',
				placeholder: '',
				valid: this.props.name!=null,
				touched: false,
			},
			location: {
				value: this.props.location || '',
				placeholder: '',
				valid: this.props.location!=null,
				touched: false,
			},
			date: {
				value: this.props.date  || '',
				placeholder: '',
				valid: this.props.date!=null,
				touched: false,
			},
			start: {
				value:this.props.start  || '',
				placeholder: '',
				valid: this.props.start!=null,
				touched: false,
			},
			end: {
				value: this.props.end   || '',
				placeholder: '',
				valid: this.props.end!=null,
				touched: false,
			},
			time: { valid: this.props.end!=null, touched:false},
		},
		validationRules: {
			name: {
				minLength:3,
				isRequired: true
			},
			location: {
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
		//let isFormValid = this.state.valid;
		
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

			let component = this.props.inputComponent;
			if(component.type.name !=="AppointmentEdit"){
				for( let [ key ] of Object.entries(formControls)){
					const updatedField = {
						...formControls[key]
					}
					updatedField.value = '';
					updatedField.valid = false;
					updatedField.touched = false;
					formControls[key] = updatedField;
					this.setState( { 
						formControls: formControls,
					})
				}
				this.setState({ valid: false })
			}
		} else {
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

	validateTime = (name, value) => {

		const updatedControls = {
			...this.state.formControls
		};

		const updatedFormElement = {
			...updatedControls[name]	
		};
		updatedFormElement.value = value;
		updatedFormElement.touched = true;
		updatedFormElement.valid= true;
		let isTimeValid;
		if(name === 'start'){
			isTimeValid= updatedFormElement.value < updatedControls.end.value;	
		} else if (name === 'end'){
			isTimeValid= updatedFormElement.value > updatedControls.start.value;	
		}
		//updatedFormElement.valid = isTimeValid;
		updatedControls[name] = updatedFormElement;
		updatedControls.time.valid = isTimeValid;
		updatedControls.time.touched = true;

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
		//this.validateInput(name,value,validateTextInput);
		this.validateTime(name,value);
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

		let validFields;

		for( let [ key, field ] of Object.entries(this.state.formControls)){
			//validFields= {...validFields, [key] : field.valid || this.state.valid };
				validFields= {...validFields, [key] : {valid : field.valid , touched : field.touched}};
		}

		return(
			
			<form onSubmit={
				this.handleSubmit
			} className="AppointmentForm">
				{React.cloneElement(this.props.inputComponent,
						{ props : values, names : names , handlers : handlers, validFields: validFields })}
			</form>
		)
	}
}

