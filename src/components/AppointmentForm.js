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
		formControls: {
			name: {
				value: this.props.name  || '',
				placeholder: '',
				valid: false,
				touched: false,
				validationRules:{
					minLength:3,
					isRequired: true
				}
			},
			owner: {
				value: this.props.owner || '',
				placeholder: '',
				valid: false,
				touched: false,
				validationRules:{
					minLength:3
				}
			},
			date: {
				value: this.props.date  || '',
				placeholder: '',
				valid: false,
				touched: false,
				validationRules:{
					minLength:3
				}
			},
			start: {
				value:this.props.start  || '',
				placeholder: '',
				valid: false,
				touched: false,
				validationRules:{
					minLength:3
				}
			},
			end: {
				value: this.props.end   || '',
				placeholder: '',
				valid: false,
				touched: false,
				validationRules:{
					minLength:3
				}
			},
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		let data;
		for( let [ key, value ] of Object.entries(this.state.formControls)){
			data = {...data, [key] : value.value};
		}
		this.props.onSave(data);
		let keys = Object.keys(this.state.formControls);
		keys.map( key => this.setState({ 
				formControls: {
					...this.state.formControls,
					[key]: { 
						...this.state.formControls[key],
					  value : ''
					}
				}
			})); 
	}

	handleTextChange = e => {
		const name = e.target.name;
		const value = e.target.value;

		const updatedControls = {
			...this.state.formControls
		};

		const updatedFormElement = {
			...updatedControls[name]	
		};

		updatedFormElement.value = value;
		updatedFormElement.touched = true;
		updatedFormElement.valid = validateTextInput(value, 
																updatedFormElement.validationRules);
		updatedControls[name] = updatedFormElement;

		this.setState({
			formControls: updatedControls
			//formControls: {
			//	...this.state.formControls,
			//	[name]: { 
			//		...this.state.formControls[name],
			//		value
			//	}
			//}
		});
	}

	handleTimeChange = (e, n) => {
		if(e === null) { return }
		const name = n.name;
		const value = e.format('HH:mm:00');
		this.setState({ 
			formControls: {
				...this.state.formControls,
				[name]: {
					...this.state.formControls[name],
					value
				}
			}
		});
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

