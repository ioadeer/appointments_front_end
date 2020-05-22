import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppointmentDetail from './AppointmentDetail'
import AppointmentForm from './AppointmentForm'
import AppointmentEdit from './AppointmentEdit'

export default class AppointmentItem extends Component{
	static propTypes = {
		appointment: PropTypes.object.isRequired,
		editAppointment: PropTypes.func.isRequired
	}
	state = {
		editing: false 
	}

	handleEdit = () => {
		this.setState({editing: true})
	}

	handleSave = (id, data) => {
		this.props.editAppointment(id, data)	
		this.setState({editing: false})
	}

	render(){
		const { id, name, owner, date, start, end } = this.props.appointment
		const { appointment, deleteAppointment } = this.props
		let element
		if(this.state.editing){
			element = (
				<AppointmentForm
					onSave ={(data) => 
						this.handleSave(id, data)
					}
					inputComponent={<AppointmentEdit />}
				  name = {name}	
					owner = {owner}
					date = {date}
					start = {start}
				 	end = {end}
				/>

			)

		} else {
			element = (
				<AppointmentDetail {...appointment} />
			)
		}
		return (
			<li className="appointment">
				{ element }
				<button onClick={() => deleteAppointment(appointment.id)}>Delete</button>
				{!this.state.editing &&
					<button onClick={this.handleEdit}>Edit</button>
				}
			
			</li>
		)
	}
}
