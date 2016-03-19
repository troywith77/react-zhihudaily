import axios from 'axios'
import $ from 'jquery'

export function getLatestStory() {
	return axios.get('/api/topStory').then(function(data) {
		return data.data
	})
}

export function getHistoryStory(date) {
	return axios({
		url: '/api/history/',
		method: 'GET',
		params: {date: date}
	}).then(function(data) {
		return data.data
	})
}

export function getDetail(id) {
	return axios({
		method: 'GET',
		url: '/api/detail/',
		params: {id: id}
	}).then(function(data) {
		return data.data
	})
}

