import { getLatestStory, getHistoryStory } from '../helpers/api'

export const GET_LATEST_DATA = () => {
	return ( dispatch, getStore ) => {
		if(getStore().mainList.length > 0) {
			return;
		}
		getLatestStory().then(data => {
			dispatch(GET_LATEST(data))
			dispatch(GET_HISTORY_DATA(getStore().UIState.LoadingDate))
			dispatch(STOP_LOADING())
		})
	}
}

export const GET_HISTORY_DATA = (date) => {
	return (dispatch, getStore) => {
		getHistoryStory(date).then(data => {
			dispatch(GET_HISTORY(data.data))
			dispatch(STOP_LOADING())
		})
	}
}

export const GET_LATEST = (data) => {
	return {
		type: 'GET_LATEST',
		data
	}
}

export const GET_HISTORY = (data) => {
	return {
		type: 'GET_HISTORY',
		data
	}
}

export const START_LOADING = () => {
	return {
		type: 'START_LOADING'
	}
}

export const STOP_LOADING = () => {
	return {
		type: 'STOP_LOADING'
	}
}

export const DECREMENT_DATE = () => {
	return {
		type: 'DECREMENT_DATE'
	}
}