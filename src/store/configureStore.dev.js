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


const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

//const configureStore = preloadedState =>{
//	let store = createStore(
//		persistedReducer,
//		preloadedState,
//		composeWithDevTools(
//			applyMiddleware(thunk, createLogger()),
//		)
//	)
//	let persistor = persistStore(store)
//	return { store, persistor }
//}

export const history = createBrowserHistory()


export default function configureStore(preloadedState){
	const store = createStore(
		persistReducer(persistConfig,createRootReducer(history)), // root reducer with router state
		preloadedState,
		composeWithDevTools(
			applyMiddleware(
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


//export default configureStore
