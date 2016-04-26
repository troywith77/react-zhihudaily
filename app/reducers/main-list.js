import { getLatestStory, getHistoryStory } from '../helpers/api'
import moment from 'moment'

const mainList = (state = [], action) => {
	switch(action.type) {
		case 'GET_LATEST':
			return action.data.data.stories
		case 'GET_HISTORY':
			return [...state].concat(
			action.data.stories);
		default:
			return state;
	}
}

const initialUIState = {
	LoadingDate: moment().format('YYYYMMDD'),
	isLoading: true
}
const UIState = (state = initialUIState, action) => {
	switch (action.type) {
		case 'START_LOADING':
			return Object.assign(state, {
				isLoading: true
			})
		case 'STOP_LOADING':
			return Object.assign(state, {
				isLoading: false
			})
		case 'DECREMENT_DATE':
			console.log(111111)
			const date = moment(state.LoadingDate).subtract(1, 'days').format('YYYYMMDD')
			return Object.assign(state, {
				LoadingDate: date
			})
		default:
			return state;
	}
}

export { mainList, UIState }