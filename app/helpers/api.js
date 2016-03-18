import axios from 'axios'
import $ from 'jquery'

export function getLatestStory() {
	return axios.get('/api/topStory').then(function(data) {
		console.log(data)
		return data.data
	})
}

