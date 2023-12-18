import { AppBar, Container, Toolbar, Typography, Box, Button, Tab } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../StyleComponants/Layout_style/Header.css'

const Header = () => {
 
  const[color,setColor]=useState(false);

  const changecolor = ()=>{
    if (window.scrollY > 80) {
      setColor(true) 
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener('scroll',changecolor)

  return (
    <AppBar id={color ? 'appbar1' : 'appbar'} >
      <Container maxWidth="x1">
        <Toolbar>
            <Typography sx={{flexGrow:3}}>
                <Link to='/'>
                <img src="Assets/img/logo.png" alt="Logo"/>
                </Link>
            </Typography>
            {/* For lg/md screen */}
            <Box sx={{flexGrow:2,display:{md:'flex', xs:'none'}}}>
               <Link to='/'>
                 <Tab label="Home" id="tab"/>
               </Link> 
               
               <Link to='emergency-dept-page'>
                <Tab label="Emergency" id="tab"/>
                </Link>
               
                <Link to='department-page'>
                <Tab label="Department" id="tab"/>
                </Link>
               
              
               <Link to='/'>
               <Tab label="Contact" id="tab"/>
               </Link> 
            </Box>
            <Box sx={{display:{md:'flex', xs:'none'}}}>
              <Link to='login'>
              <Button id='btn1'>Login</Button>
              </Link>  
              <Link to='signUp'>
              <Button id='btn2' >Sign Up</Button>
              
              </Link>
               
              
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
