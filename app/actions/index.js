import { getLatestStory, getHistoryStory, getDetail } from '../helpers/api'

export const GET_LATEST_DATA = () => {
	return ( dispatch, getStore ) => {
		if(getStore().mainList.length > 0) {
			return;
		}
		getLatestStory().then(data => {
			dispatch(GET_LATEST(data))
			//首次加载时除了最新的还加载昨天的，因为高度不够无法触发到底部刷新加载历史内容
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

export const GET_DETAIL_DATA = (id) => {
	return (dispatch => {
		getDetail(id).then(data => {
			dispatch(GET_DETAIL(data))
		})
	})
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

export const GET_DETAIL = (data) => {
	return {
		type: 'GET_DETAIL',
		data
	}
}

export const EMPTY_DETAIL = () => {
	return {
		type: 'EMPTY_DETAIL'
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