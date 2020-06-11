import * as types from '../constants/ActionTypes'
import { withAuth } from '../reducers'
import { RSAA } from 'redux-api-middleware'
import * as schemas from '../schemas' 
import { normalize, arrayOf } from 'normalizr'

export const setVisibilityFilter = filter => ({ type : types.SET_VISIBILITY_FILTER, filter })

let nextAppointmentId = 0

//export const addAppointment = (data) => ({
//	type: types.ADD_APPOINTMENT,
//	id: nextAppointmentId++,
//	...data
//})

//export const deleteAppointment = id => ({
//	type: types.DELETE_APPOINTMENT,
//	id: id,
//})

//export const editAppointment = (id,data) => ({
//	type: types.EDIT_APPOINTMENT,
//	id: id,
//	...data
//})

export const deleteAppointment= (id) => ({
	[RSAA]: {
		endpoint: `api/v1/appointments/${id}`,
		method: 'DELETE',
		headers: withAuth({'Content-Type' : 'application/json' }),
		types: [
			types.DELETE_APPOINTMENT_REQUEST, 
			types.DELETE_APPOINTMENT_SUCCESS, 
			types.DELETE_APPOINTMENT_FAILURE
		]
	}
})

export const editAppointment= (id, data) => ({
	[RSAA]: {
		endpoint: `api/v1/appointments/${id}`,
		method: 'PUT',
		headers: withAuth({'Content-Type' : 'application/json' }),
		body: JSON.stringify(
			{
				name: data.name,
				owner: data.owner,
				date: data.date,
				start: data.start,
				end: data.end,
				location: data.location,
			}),
		types: [
			types.DELETE_APPOINTMENT_REQUEST, 
			types.DELETE_APPOINTMENT_SUCCESS, 
			types.DELETE_APPOINTMENT_FAILURE
		]
	}
})
export const addAppointment = (data) => ({
	[RSAA]: {
		endpoint: 'api/v1/appointments/',
		method: 'POST',
		body: JSON.stringify(
			{
				name: data.name,
				owner: data.owner,
				date: data.date,
				start: data.start,
				end: data.end,
				location: data.location,
			}),
		headers: withAuth({'Content-Type' : 'application/json' }),
		types: [
			types.ADD_APPOINTMENT_REQUEST, 
			types.ADD_APPOINTMENT_SUCCESS, 
			types.ADD_APPOINTMENT_FAILURE
		]
	}
})

export const fetchUserAppointments = () => ({
	[RSAA]: {
		endpoint: 'api/v1/appointments/',
		method: 'GET',
		headers: withAuth({'Content-Type' : 'application/json' }),
		types: [
			types.FETCH_APPOINTMENTS_REQUEST, 
			types.FETCH_APPOINTMENTS_SUCCESS, 
			types.FETCH_APPOINTMENTS_FAILURE
		]
	}
})

