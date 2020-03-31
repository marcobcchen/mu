import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as routes from './constants/routes'
import CssBaseline from '@material-ui/core/CssBaseline'
//components
import HomePage from './pages/Home/HomePage'
import AppNavigation from './components/AppNavigation/AppNavigation'
import Backdrop from './UI/Feedback/Backdrop'

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Router>
        {/* <AppNavigation /> */}
        <Route exact path={routes.HOME_PAGE} component={() => <HomePage />} />
      </Router>
      <Backdrop />
    </div>
  )
}

export default App
