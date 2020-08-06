import { RSAA } from 'redux-api-middleware'

export const LOGIN_REQUEST	= '@@auth/LOGIN_REQUEST'  
export const LOGIN_SUCCESS	= '@@auth/LOGIN_SUCCESS'
export const LOGIN_FAILURE	= '@@auth/LOGIN_FAILURE'

export const TOKEN_REQUEST  = '@@auth/TOKEN_REQUEST'  
export const TOKEN_RECEIVED = '@@auth/TOKEN_RECEIVED'  
export const TOKEN_FAILURE  = '@@auth/TOKEN_FAILURE'

export const login = (username, password) => ({
	[RSAA]: {
		//endpoint: 'api/v1/token/',
		//endpoint: 'http://127.0.0.1:8000/api/v1/token/',
		endpoint: 'https://rest-appointments-backend.herokuapp.com/api/v1/token/',
		method: 'POST',
		body: JSON.stringify({username, password}),
		//headers: {'Content-Type' : 'application/json' },
		headers: {'Content-Type' : 'application/json','Allow-Control-Allow-Origin': 'https://rest-appointments-backend.herokuapp.com','Access-Control-Allow-Credentials': 'true' },
		types: [
			LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
		]
	}
})

export const refreshAccessToken = (token) => ({
	[RSAA]: {
		//endpoint: 'http://127.0.0.1:8000/api/v1/token/refresh/',
		endpoint: 'https://rest-appointments-backend.herokuapp.com/api/v1/token/refresh/',
		//endpoint: 'api/v1/token/refresh/',
		method: 'POST',
		body: JSON.stringify({refresh: token}),
		//headers: {'Content-Type' : 'application/json' },
		headers: {'Content-Type' : 'application/json','Allow-Control-Allow-Origin': 'https://rest-appointments-backend.herokuapp.com','Access-Control-Allow-Credentials': 'true' },
		types: [
			TOKEN_REQUEST, TOKEN_RECEIVED, TOKEN_FAILURE
		]
	}
})

export const LOGOUT = 'LOGOUT'

export const logout = () => ({
	type: LOGOUT
})
