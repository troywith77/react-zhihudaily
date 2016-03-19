import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MainContainer from '../containers/MainContainer'
import StoryListContainer from '../containers/StoryListContainer'
import DetailContainer from '../containers/DetailContainer'

const route = (
	<Router history={browserHistory}>
		<Route path='/' component={MainContainer}>
			<IndexRoute component={StoryListContainer} />
			<Route path='detail/:id' component={DetailContainer} />
		</Route>
	</Router>
)

export default route