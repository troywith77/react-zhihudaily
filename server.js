var express = require('express')
var path = require('path')
var axios = require('axios')

var app = express()

app.use(express.static(path.join(__dirname, 'public')))

function getList() {
	return axios.get('http://news-at.zhihu.com/api/4/news/latest').then(function(data) {
		return data
	})
}

app.get('/api/topStory', function(req, res) {
	res.setHeader('Content-Type', 'application/json;charset=utf-8');
	getList().then(function(data) {
		res.send(data)
	})
})

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(3000, function() {
	console.log('App is running on port 3000.')
})