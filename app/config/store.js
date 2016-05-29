import { createStore, combineReducers, applyMiddleware } from 'redux'
import {  mainList , detail, UIState, themesList, theme } from '../reducers/'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	mainList,
	detail,
	UIState,
	themesList,
	theme
})

let store = createStore(
	rootReducer,
	applyMiddleware(thunk)
)

export default store