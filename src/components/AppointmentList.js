import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppointmentItem from './AppointmentItem'
import AppointmentItemRow from './AppointmentItemRow'

export default class AppoitnmentList extends Component{

	constructor(props){
		super();
		this.state = { view: 'list'}
	}

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
		actions:PropTypes.object.isRequired
	}

	handleViewStyle = msg => {
		this.setState({
			view: msg 
		});
	}

	render(){
		const filteredAppointments = this.props.filteredAppointments;
		const actions = this.props.actions;
		if(this.props.refresh){
			this.props.actions.fetchUserAppointments();
		}
		return(
		<div className="container">
			<div className="ButtonContainer" style={{ justifyContent:"center" }}>
				<a className="waves-effect waves-light btn-small blue accent-3" onClick={() => this.handleViewStyle("list")} id="list"><i className="material-icons">view_list</i></a>
				<a className="waves-effect waves-light btn-small blue accent-3" onClick={() => this.handleViewStyle("module")} id="module"><i className="material-icons">view_module</i></a>
			</div>
			{this.state.view === 'list' ?
			<div className="col s8 offset-s2">
				<table className="striped s12">
					<thead>
						<tr>
							<th>Name</th>
							<th>Owner</th>
							<th>Date</th>
							<th>Start</th>
							<th>End</th>
							<th>Location</th>
						</tr>
					</thead>
					<tbody>
						{filteredAppointments.map( a =>
							<AppointmentItemRow key={a.id} {...a} />
						)}
					</tbody>
				</table>
		</div>
		:
			<ul className="appointment-list">
				{filteredAppointments.map( a =>
					<AppointmentItem key={a.id} appointment={a} {...actions} />
				)}
			</ul>
			}
		</div>
		)
	}
}

