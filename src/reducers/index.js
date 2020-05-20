import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import appointments from './appointments'
import visibilityFilter from './visibilityFilter'

export const rootReducer = combineReducers({
	appointments,
	visibilityFilter
})


const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	appointments,
	visibilityFilter
})

export default createRootReducer
