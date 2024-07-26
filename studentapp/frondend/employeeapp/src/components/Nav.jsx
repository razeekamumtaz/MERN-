import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
      <div>
      <AppBar color="warning">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>Employee App

          </Typography>
          <Link to='add'><Button variant="outlined" color="inherit" >ADD</Button></Link>&nbsp;&nbsp;
          <Link to='view'><Button variant="outlined" color="inherit" >VIEW</Button></Link>
        </Toolbar>
          </AppBar> 

    </div>
  )
}

export default Nav