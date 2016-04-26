import { createStore, combineReducers, applyMiddleware } from 'redux'
import {  mainList ,UIState } from '../reducers/'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	mainList,
	UIState
})

let store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

export default store