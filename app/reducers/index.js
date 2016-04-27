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

const detail = (state = {}, action) => {
	switch(action.type) {
		case 'GET_DETAIL':
			return Object.assign({},
				state,
				action.data);
		case 'EMPTY_DETAIL':
			return {}
		default:
			return state;
	}
}

const initialUIState = {
	LoadingDate: moment().format('YYYYMMDD'),
	isLoading: true,
	isDialogOpen: false
}
const UIState = (state = initialUIState, action) => {
	switch (action.type) {
		case 'START_LOADING':
			return Object.assign({}, state, {
				isLoading: true
			})
		case 'STOP_LOADING':
			return Object.assign({}, state, {
				isLoading: false
			})
		case 'DECREMENT_DATE':
			return Object.assign({}, state, {
				LoadingDate: moment(state.LoadingDate).subtract(1, 'days').format('YYYYMMDD')
			})
		case 'OPEN_ABOUT_DIALOG':
			return Object.assign({}, state, {
				isDialogOpen: true
			})
		case 'CLOSE_ABOUT_DIALOG':
			return Object.assign({}, state, {
				isDialogOpen: false
			})
		default:
			return state;
	}
}

export { mainList, detail, UIState }