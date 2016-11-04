require('../styles/reset.css')
require('../styles/index.css')

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Start, Register, Login, List, Layout, ElectionDetails, ElectionVote } from './pages'

injectTapEventPlugin()

render((
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route component={Layout}>
        <Route path='/' component={Start} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/list' component={List} />
        <Route component={List}>
          <Route path='/election/:id' component={ElectionDetails} />
          <Route path='/election/:id/vote' component={ElectionVote} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('content'))
