import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppointmentItem from './AppointmentItem'

//const AppointmentList = ({ filteredAppointments, actions }) => {
//	const  fetchUsApp  = actions.fetchUserAppointments
//
//	return(
//	<ul className="appointment-list">
//		{filteredAppointments.map( a =>
//			<AppointmentItem key={a.id} appointment={a} {...actions} />
//		)}
//	</ul>
//	)
//}

export default class AppoitnmentList extends Component{
	componentDidMount(){
		this.props.actions.fetchUserAppointments();
	}
	static propTypes = {
		filteredAppointments: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			owner: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired,
			start: PropTypes.string.isRequired,
		}).isRequired).isRequired,
		actions:PropTypes.object.isRequired,
		refresh: PropTypes.bool
	}

	refreshComponent = () =>{
		this.props.actions.fetchUserAppointments();
	}
	render(){
		const filteredAppointments = this.props.filteredAppointments;
		const actions = this.props.actions;
		if(this.props.refresh){
			this.props.actions.fetchUserAppointments();
		}
		return(
		<ul className="appointment-list">
			{filteredAppointments.map( a =>
				<AppointmentItem key={a.id} appointment={a} {...actions} />
			)}
		</ul>
		)
	}
}

//AppointmentList.propTypes = {
//	filteredAppointments: PropTypes.arrayOf(PropTypes.shape({
//		id: PropTypes.number.isRequired,
//		name: PropTypes.string.isRequired,
//		owner: PropTypes.string.isRequired,
//		date: PropTypes.string.isRequired,
//		start: PropTypes.string.isRequired,
//	}).isRequired).isRequired,
//	actions:PropTypes.object.isRequired
//}
//
//export default AppointmentList
