import moment from 'moment'

const mainList = (state = [], action) => {
	switch(action.type) {
		case 'GET_LATEST':
			return action.data.data.stories
		case 'GET_HISTORY':
			return [...state, ...action.data.stories];
		default:
			return state;
	}
}

const themesList = ( state = [], action) => {
	switch(action.type) {
		case 'LOAD_THEMES_LIST':
			return action.list
		default:
			return state
	}
}

const theme = (state = {}, action) => {
	switch(action.type) {
		case 'GET_THEME':
			return Object.assign({}, action.theme)
		default:
			return state
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
	isDialogOpen: false,
	isDrawerOpen: false
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
		case 'OPEN_DRAWER':
			return Object.assign({}, state, {
				isDrawerOpen: true
			})
		case 'CLOSE_DRAWER':
			return Object.assign({}, state, {
				isDrawerOpen: false
			})
		default:
			return state;
	}
}

export { mainList, detail, UIState, themesList, theme }