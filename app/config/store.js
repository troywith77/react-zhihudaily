import { createStore, combineReducers, applyMiddleware } from 'redux'
import {  mainList , detail, UIState } from '../reducers/'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	mainList,
	detail,
	UIState
})

let store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

export default store