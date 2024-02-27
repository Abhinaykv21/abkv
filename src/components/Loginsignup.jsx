import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Loginsignup = () => {
  return (
    <div>
<br></br><br></br>

<Button variant='contained' color='success'><Link to={'/login'} style={{textDecoration:'none'}}>Login</Link></Button>&nbsp;&nbsp;
<Button variant='contained' color='success'><Link to={'/sign'} style={{textDecoration:'none'}}>Sign Up</Link></Button>



    </div>
  )
}

export default Loginsignup


