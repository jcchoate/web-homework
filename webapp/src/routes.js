import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './home'
import { Bank } from './bankPage'
import { layoutStyle, contentStyle } from './styles'
import NavBar from './components/nav/NavBar'

const pages = [['/', 'Home'], ['/bank', 'Bank']]

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <NavBar pages={pages} />
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={Bank} exact path='/bank' />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter
