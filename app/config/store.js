import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as rootReducer from '../reducers'
import thunk from 'redux-thunk'

let store = createStore(
	combineReducers(rootReducer),
	applyMiddleware(thunk)
)

export default store