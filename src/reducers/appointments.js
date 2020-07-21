import{
	//ADD_APPOINTMENT,
	//DELETE_APPOINTMENT,
	//EDIT_APPOINTMENT,
	FETCH_APPOINTMENTS_REQUEST,
	FETCH_APPOINTMENTS_SUCCESS,
	FETCH_APPOINTMENTS_FAILURE,
	ADD_APPOINTMENT_REQUEST,
	ADD_APPOINTMENT_SUCCESS,
	ADD_APPOINTMENT_FAILURE,
	DELETE_APPOINTMENT_REQUEST,
	DELETE_APPOINTMENT_SUCCESS,
	DELETE_APPOINTMENT_FAILURE,
	EDIT_APPOINTMENT_REQUEST,
	EDIT_APPOINTMENT_SUCCESS,
	EDIT_APPOINTMENT_FAILURE
} from '../constants/ActionTypes'

import { LOGOUT } from '../actions/auth'

const initialState = {
	appointmentList: [],
	loading: false,
	error: null,
	refresh: true,
}

let tempAppointments= [];
const setUpAppointments = (state, payload) => {
	
	tempAppointments= [];
	payload.forEach( (element) => 
		tempAppointments.push(
			{
				id: element.id, 
				name: element.name,
				owner: element.owner,
				date: element.date,
				start: element.start,
				end: element.end,
				location: element.location,
			}
		))
	return tempAppointments

}

const appointments = ( state = initialState,action) => {
	switch(action.type){
		case LOGOUT:
			return initialState
		case ADD_APPOINTMENT_REQUEST:
			return {...state, loading: true}
		case ADD_APPOINTMENT_SUCCESS:
			return {...state, loading: false, refresh: true}
		case ADD_APPOINTMENT_FAILURE:
			return state
		case DELETE_APPOINTMENT_REQUEST:
			return {...state, loading: true}
		case DELETE_APPOINTMENT_SUCCESS:
			return {...state, loading: false, refresh: true}
		case DELETE_APPOINTMENT_FAILURE:
			return {...state,loading: false}
		case EDIT_APPOINTMENT_REQUEST:
			return {...state, loading: true}
		case EDIT_APPOINTMENT_SUCCESS:
			return {...state, loading: false, refresh: true}
		case EDIT_APPOINTMENT_FAILURE:
			return {...state,loading: false}
		case FETCH_APPOINTMENTS_REQUEST:
			return {...state, loading: true }  
		case FETCH_APPOINTMENTS_SUCCESS:
			let temp = setUpAppointments(state,action.payload)
			return{...state,refresh: false, loading: false,  appointmentList: temp}
		case FETCH_APPOINTMENTS_FAILURE:
			return state
		default:	
			return state
	}
}

export default appointments
