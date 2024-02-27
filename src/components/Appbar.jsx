import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='error'>
        <Toolbar>
       
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
         <b>   Blood Bank </b>
         
        
        
        
          </Typography>
          <Button variant='contained' color='success'><Link to={'/homee'} style={{textDecoration:'none'}}>Home</Link></Button>&nbsp;
          <Button variant='contained' color='success'><Link to={'/loginsignup'} style={{textDecoration:'none'}}>Login/Signup</Link></Button>&nbsp;
          <Button variant='contained' color='success'><Link to={'/dash'} style={{textDecoration:'none'}}>Donar Dashboard</Link></Button>&nbsp;
        </Toolbar>
      </AppBar>
    </Box>
  );
}