import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Header from '../components/header.js'
import TopStoryList from '../components/topStoryList.js'

const route = (
	<Router history={browserHistory}>
		<Route path='/' component={Header}>
			<IndexRoute component={TopStoryList} />
		</Route>
	</Router>
)

export default route