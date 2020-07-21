import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import createRootReducer from '../reducers'
import { rootReducer } from '../reducers'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createFilter } from 'redux-persist-transform-filter'
//import { apiMiddleware } from 'redux-api-middleware'
import  apiMiddleware  from '../middleware'

const authFilter= createFilter(
	'auth', ['access', 'refresh'])

const appointmentFilter = createFilter(
	'appointments',
	['id','name','owner','date','start','end'])

const persistConfig = {
	key: 'root',
	storage : storage,
	whitelist: ['auth','appointments','visibilityFilter'],
	transforms: [authFilter]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const history = createBrowserHistory()

export default function configureStore(preloadedState){
	const store = createStore(
		persistReducer(persistConfig,createRootReducer(history)), // root reducer with router state
		preloadedState,
		composeWithDevTools(
			applyMiddleware(
				apiMiddleware,
				routerMiddleware(history), // for dispatching history actions
				thunk,
				createLogger(),
			),
		),
	)
	//persistStore(store)
	let persistor = persistStore(store)
	return { store, persistor }
}

