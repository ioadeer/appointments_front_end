import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from '../reducers'

export const history = createBrowserHistory()

export default function configureStore(preoloadedState){

}

