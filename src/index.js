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

//const store = createStore(rootReducer)
//const store = createStore(
//	rootReducer, /* preloadedState,*/
//	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//)

const values = configureStore() 

//render(<Root store={values.store} persistor={values.persistor} history={history}/>, 
render(<Root store={values.store}  history={history}/>, 
	document.getElementById('root')
)
//render(
//	<Provider store={values.store}>
//		<PersistGate loading={null} persistor={values.persistor}>
//		<App />
//		</PersistGate>
//	</Provider>,
//	document.getElementById('root')
//)
