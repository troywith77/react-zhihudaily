import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Header from '../components/header.js'
import TopStoryList from '../components/topStoryList'
import Detail from '../components/detail'

const route = (
	<Router history={browserHistory}>
		<Route path='/' component={Header}>
			<IndexRoute component={TopStoryList} />
			<Route path='detail/:id' component={Detail} />
		</Route>
	</Router>
)

export default route