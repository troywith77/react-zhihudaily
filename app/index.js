import React from 'react'
import ReactDOM from 'react-dom'
import route from './config/route.js'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

ReactDOM.render(route, document.getElementById('app'))