import { RSAA } from 'redux-api-middleware'
import { endpointConcat } from './util'

export const SIGNUP_REQUEST	= '@@signup/SIGNUP_REQUEST'  
export const SIGNUP_SUCCESS	= '@@signup/SIGNUP_SUCCESS'
export const SIGNUP_FAILURE	= '@@signup/SIGNUP_FAILURE'

export const signup = (data) => ({
	[RSAA]: {
		endpoint: endpointConcat('/api/v1/rest-auth/registration/'),
		method: 'POST',
		body: JSON.stringify(
		{ 
			username: data.name,
			email: data.email,
			password1: data.password,
			password2: data.passwordRepeat
		}),
		headers: {'Content-Type' : 'application/json' },
		types: [
			SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE
		]
	}
})

export const SIGNUP_SUCCESS_REDIRECT = '@@signup/SIGNUP_SUCCESS_REDIRECT'

export const signupSuccessRedirect = () => ({
	type: SIGNUP_SUCCESS_REDIRECT,
})
