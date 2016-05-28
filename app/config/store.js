import { createStore, combineReducers, applyMiddleware } from 'redux'
import {  mainList , detail, UIState, themesList } from '../reducers/'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	mainList,
	detail,
	UIState,
	themesList
})

let store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

export default store