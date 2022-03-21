import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'
import NavBar from './NavBar'

describe('NavBar', () => {
  const props = {
    pages: [['/page1', 'someSite']]
  }

  it('should render the Nav Bar component ', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <NavBar {...props} />
      </Router>
    )
    expect(screen.getByTestId('navBar')).toBeInTheDocument()
  })
})
