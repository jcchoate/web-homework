import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import { arrayOf, string } from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar ({ pages }) {
  return (
    <Box data-testid={'navBar'} sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar variant='regular'>
          <Box>
            {pages.map((page) => (
              <Button component={Link} key={page[0]} to={page[0]} color="inherit">
                {page[1]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

NavBar.propTypes = {
  pages: arrayOf(arrayOf(string)).isRequired
}
