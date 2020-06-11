import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import './static/style.css'
import configureStore, { history } from './store/configureStore' 
import { PersistGate } from 'redux-persist/integration/react'
import Root from './components/Root'


const values = configureStore() 

//render(<Root store={values.store} persistor={values.persistor} history={history}/>, 
render(<Root store={values.store}  history={history}/>, 
	document.getElementById('root')
)
