import React from 'react'
import ReactDOM from 'react-dom'
import route from './config/route.js'

import { Provider } from 'react-redux'
import store from './config/store'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

ReactDOM.render(
	<Provider store={store}>
		{route}
	</Provider>,
	document.getElementById('app')
)