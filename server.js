var express = require('express')
var path = require('path')
var axios = require('axios')

var app = express()

app.use(express.static(path.join(__dirname, 'public')))

//api start

//最新消息
function getList() {
	return axios.get('http://news-at.zhihu.com/api/4/news/latest').then(function(data) {
		return data
	})
}

app.get('/api/topStory', function(req, res) {
	res.setHeader('Content-Type', 'application/json;charset=utf-8');
	getList().then(function(data) {
		res.send(data) //之前返回一个没有内容的对象，是因为返回了一个Promise
	})
})

//过往消息，传日期
function getHistoryStory(date) {
	return axios.get('http://news.at.zhihu.com/api/4/news/before/' + date).then(function(data) {
		return data
	})
}

app.get('/api/history/*', function(req, res) {
	res.setHeader('Content-Type', 'application/json;charset=utf-8');
	getHistoryStory(req.query.date).then(function(data) {
		res.send(data)
	})
})

//详情
function getDetail(id) {
	return axios.get('http://news-at.zhihu.com/api/4/news/' + id).then(function(data) {
		return data
	})
}

app.get('/api/detail/*', function(req, res) {
	res.setHeader('Content-Type', 'application/json;charset=utf-8');
	getDetail(req.query.id).then(function(data) {
		res.send(data)
	})
})

//api end

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(3000, function() {
	console.log('App is running on port 3000.')
})
