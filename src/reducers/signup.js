import{
	SIGNUP_REQUEST, 
	SIGNUP_SUCCESS, 
	SIGNUP_FAILURE,
	SIGNUP_SUCCESS_REDIRECT,
} from '../actions/signup'

const initialState = {
	success: false,
	loading: false,
	errors: null,
}

const signup = ( state = initialState, action) => {

	switch(action.type){
		case SIGNUP_SUCCESS_REDIRECT:
			return initialState
		case SIGNUP_REQUEST:
			return {
				...state,
				loading: false,
				success: false,
			}
		case SIGNUP_SUCCESS:
			return {
				...state,
				success: true,
				errors: 
					action.payload.errors ||
				{'non_field_errors': action.payload.statusText},
		}
		case SIGNUP_FAILURE:
			return {
				success: false,
				loading: false,
				errors: 
					action.payload.errors ||
				{'non_field_errors': action.payload.statusText},
			}
		default:
			return state
	}
}

export default signup
