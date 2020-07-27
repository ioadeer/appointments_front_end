import { RSAA } from 'redux-api-middleware'

export const SIGNUP_REQUEST	= '@@signup/SIGNUP_REQUEST'  
export const SIGNUP_SUCCESS	= '@@signup/SIGNUP_SUCCESS'
export const SIGNUP_FAILURE	= '@@signup/SIGNUP_FAILURE'

export const signup = (data) => ({
	[RSAA]: {
		endpoint: 'api/v1/rest-auth/registration/',
		//endpoint: 'http://127.0.0.1:8000/api/v1/token/',
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
