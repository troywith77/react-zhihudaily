var axios = require('axios')

//最新消息
function getList() {
	return axios.get('http://news-at.zhihu.com/api/4/news/latest').then(function(data) {
		return data
	})
}

const getListAPI = (req, res) => {
	getList().then(function(data) {
		res.send(data) //之前返回一个没有内容的对象，是因为返回了一个Promise
	})
}

//过往消息，传日期
function getHistoryStory(date) {
	return axios.get('http://news.at.zhihu.com/api/4/news/before/' + date).then(function(data) {
		return data
	})
}

const getHistoryStoryAPI = (req, res) => {
	getHistoryStory(req.query.date).then(function(data) {
		res.send(data)
	})
}

//详情
function getDetail(id) {
	return axios.get('http://news-at.zhihu.com/api/4/news/' + id).then(function(data) {
		return data
	})
}

const getDetailAPI = (req, res) => {
	getDetail(req.query.id).then(function(data) {
		res.send(data)
	})
}

module.exports = {
	getListAPI,
	getHistoryStoryAPI,
	getDetailAPI
}