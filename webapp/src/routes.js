import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './home'
import { layoutStyle, contentStyle } from './styles'
import NavBar from './components/nav/NavBar'

const pages = [['/', 'Home'], ['/another', 'Another Page']]

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <NavBar pages={pages} />
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={() => (<div>Content for /another route</div>)} exact path='/another' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter
