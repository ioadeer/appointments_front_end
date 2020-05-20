import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'

//const Root = ({ store, persistor, history }) => (
//	<Provider store={store}>
//		<PersistGate loading={null} persistor={persistor}>
//			<ConnectedRouter history={history}>
//				<Route path="/:filter?" component={App} />
//			</ConnectedRouter>
//		</PersistGate>
//	</Provider>
//)

const Root = ({ store, history }) => (
	<Provider store={store}>
			<ConnectedRouter history={history}>
				<Route path="/:filter?" component={App} />
			</ConnectedRouter>
	</Provider>
)
Root.propType = {
	store: PropTypes.object.isRequired
}

export default Root
