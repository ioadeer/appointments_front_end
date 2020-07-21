import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'
import Login from '../containers/Login' 
import PrivateRoute from '../containers/PrivateRoute' 
import App from './App'

const Root = ({ store, history }) => (
	<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					<Route exact path="/login/" component={Login} />	
					<PrivateRoute exact path="/:filter?" component={App} />
				</Switch>
			</ConnectedRouter>
	</Provider>
)
Root.propType = {
	store: PropTypes.object.isRequired
}

export default Root
//<Route path="/:filter?" component={App} />
