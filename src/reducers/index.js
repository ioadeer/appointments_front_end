import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import appointments from './appointments'
import visibilityFilter from './visibilityFilter'
import auth, * as fromAuth from './auth'
import signup from './signup'

export const rootReducer = combineReducers({
	appointments,
	visibilityFilter
})


const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	appointments,
	visibilityFilter,
	auth,
	signup
})

export default createRootReducer

export const isAuthenticated = 
	state => fromAuth.isAuthenticated(state.auth)
export const accessToken = 
	state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired =
	state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken =
	state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired =
	state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors =
	state => fromAuth.errors(state.auth)

export function withAuth(headers ={}) {
	return (state) => ({
		...headers,
		'Authorization': `Bearer ${accessToken(state)}`
	})
}
