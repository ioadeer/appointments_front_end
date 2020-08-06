import * as types from '../constants/ActionTypes'
import { withAuth } from '../reducers'
import { RSAA } from 'redux-api-middleware'
//import * as schemas from '../schemas' 
//import { normalize, arrayOf } from 'normalizr'

//if (process.env.NODE_ENV === 'production') {
//	prod_endpoint = 
//} else {
//	dev_endpoint = require('./configureStore.dev')
//}

export const setVisibilityFilter = filter => ({ type : types.SET_VISIBILITY_FILTER, filter })

export const deleteAppointment= (id) => ({
	[RSAA]: {
		//endpoint: `api/v1/appointments/${id}`,
		endpoint: `https://rest-appointments-backend.herokuapp.com/api/v1/appointments/${id}`,
//		endpoint: `http://127.0.0.1:8000/api/v1/appointments/${id}`,
		method: 'DELETE',
		//headers: withAuth({'Content-Type' : 'application/json' }),
		headers: withAuth({'Content-Type' : 'application/json','Access-Control-Allow-Origin': 'https://rest-appointments-backend.herokuapp.com','Access-Control-Allow-Credentials': 'true' }),
		types: [
			types.DELETE_APPOINTMENT_REQUEST, 
			types.DELETE_APPOINTMENT_SUCCESS, 
			types.DELETE_APPOINTMENT_FAILURE
		]
	}
})

export const editAppointment= (id, data) => ({
	[RSAA]: {
		//endpoint: `api/v1/appointments/${id}`,
		//endpoint: `http://127.0.0.1:8000/api/v1/appointments/${id}`,
		endpoint: `https://rest-appointments-backend.herokuapp.com/api/v1/appointments/${id}`,
		method: 'PUT',
		//headers: withAuth({'Content-Type' : 'application/json' }),
		headers: withAuth({'Content-Type' : 'application/json','Access-Control-Allow-Origin': 'https://rest-appointments-backend.herokuapp.com','Access-Control-Allow-Credentials': 'true' }),
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
			types.EDIT_APPOINTMENT_REQUEST, 
			types.EDIT_APPOINTMENT_SUCCESS, 
			types.EDIT_APPOINTMENT_FAILURE
		]
	}
})
export const addAppointment = (data) => ({
	[RSAA]: {
		//endpoint: `http://127.0.0.1:8000/api/v1/appointments/`,
		//endpoint: 'api/v1/appointments/',
		endpoint: 'https://rest-appointments-backend.herokuapp.com/api/v1/appointments/',
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
		//headers: withAuth({'Content-Type' : 'application/json' }),
		headers: withAuth({'Content-Type' : 'application/json','Access-Control-Allow-Origin': 'https://rest-appointments-backend.herokuapp.com','Access-Control-Allow-Credentials': 'true' }),
		types: [
			types.ADD_APPOINTMENT_REQUEST, 
			types.ADD_APPOINTMENT_SUCCESS, 
			types.ADD_APPOINTMENT_FAILURE
		]
	}
})

export const fetchUserAppointments = () => ({
	[RSAA]: {
		//endpoint: 'api/v1/appointments/',
		//endpoint: 'http://127.0.0.1:8000/api/v1/appointments/',
		endpoint: 'https://rest-appointments-backend.herokuapp.com/api/v1/appointments/',
		method: 'GET',
		headers: withAuth({'Content-Type' : 'application/json','Access-Control-Allow-Origin': 'https://rest-appointments-backend.herokuapp.com','Access-Control-Allow-Credentials': 'true' }),
		types: [
			types.FETCH_APPOINTMENTS_REQUEST, 
			types.FETCH_APPOINTMENTS_SUCCESS, 
			types.FETCH_APPOINTMENTS_FAILURE
		]
	}
})

