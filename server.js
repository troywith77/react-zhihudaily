var express = require('express')
var path = require('path')
var axios = require('axios')

var app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': '*',
        // 'Content-Type': 'application/json;charset=utf-8'
    })
    next()
})

//api start
var getListAPI = require('./config/api').getListAPI
var getHistoryStoryAPI = require('./config/api').getHistoryStoryAPI
var getDetailAPI = require('./config/api').getDetailAPI
var getThemesListAPI = require('./config/api').getThemesListAPI
var getThemeAPI = require('./config/api').getThemeAPI

app.get('/api/topStory', getListAPI)
app.get('/api/history/*', getHistoryStoryAPI)
app.get('/api/detail/*', getDetailAPI)
app.get('/api/themesList', getThemesListAPI)
app.get('/api/theme/*', getThemeAPI)

//api end

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(3000, function() {
	console.log('App is running on port 3000.')
})
