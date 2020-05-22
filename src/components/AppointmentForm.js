import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
		name : this.props.name  || '',
		owner : this.props.owner  || '',
		date : this.props.date  || '',
		start : this.props.start  || '',
		end : this.props.end  || '',
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSave(this.state);
		let keys = Object.keys(this.state);
		keys.map( key => this.setState({ [key] : ''})); 
	}

	handleNameChange =  e => {
		this.setState({ name : e.target.value })
	}

	handleOwnerChange =  e => {
		this.setState({ owner: e.target.value })
	}

	handleDateChange =  e => {
		this.setState({ date: e.target.value })
	}

	handleStartChange =  e => {
		//this.setState({ start: e.target.value })
		if(e === null) { return }
		let time = e.format('HH:mm:00')
		this.setState({ start: time })
	}

	handleEndChange=  e => {
		//this.setState({ end: e.target.value })
		if(e === null) { return }
		let time = e.format('HH:mm:00')
		this.setState({ end: time })
	}

	render() {
		const handlers = {
			handleNameChange : this.handleNameChange,
			handleOwnerChange:this.handleOwnerChange,
			handleDateChange : this.handleDateChange,
			handleStartChange:this.handleStartChange,
			handleEndChange	 :  this.handleEndChange
		}
	
		return(
			
			<form onSubmit={
				this.handleSubmit
			} className="AppointmentForm">
				{React.cloneElement(this.props.inputComponent,
						{ props:this.state,handlers:handlers})}
			</form>
		)
	}
}

