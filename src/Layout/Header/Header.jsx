import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  Tab,
  MenuItem,
  Menu,
  Stack,
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../StyleComponants/Layout_style/Header.css";

const Header = () => {

  let token_value = window.sessionStorage.getItem('tokenValue')

  // console.log("token",token_value);
  const navigate = useNavigate()
  const [color, setColor] = useState(false);

  const changecolor = () => {
    if (window.scrollY > 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changecolor);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
let logoutUser =()=>{
  window.sessionStorage.clear()

  navigate('/')

}

  return (
    <AppBar id={color ? "appbar1" : "appbar"}>
      <Container maxWidth="x1">
        <Toolbar>
          <Typography sx={{ flexGrow: 3 }}>
            <Link to="/">
              <img src="Assets/img/logo.png" alt="Logo" />
            </Link>
          </Typography>
          {/* For lg/md screen */}
          <Box sx={{ flexGrow: 2, display: { md: "flex", xs: "none" } }}>
            <Link to="/">
              <Tab label="Home" id="tab" />
            </Link>
            <Link to="emergency-dept-page">
              <Tab label="Emergency" id="tab" />
            </Link>
            <Link to="admission">
              <Tab label="Admission" id="tab" />
            </Link>

            {/* <Link to="/">
              <Tab label="Career" id="tab" />
            </Link> */}

            <Link to="department-page">
              <Tab label="Department" id="tab" />
            </Link>

            <Link to="/">
              <Tab label="Contact" id="tab" />
            </Link>
            {!window.sessionStorage.getItem('tokenValue') &&
            <Box>
            <Link to="signUp">
              <Button id="btn2">Sign Up</Button>
            </Link>
            <Link to="login">
              <Button id="btn1">Login</Button>
            </Link>
            </Box>
           
            }
            {window.sessionStorage.getItem('tokenValue') &&
              <Button id="btn1" onClick={logoutUser}>Logout</Button>
            }
          </Box>
         
          
         
          {/* For xs screen */}
          <Box sx={{ display: { md: "none", xs: "flex" } }}>
          <IconButton 
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black">
            <MenuIcon />
          </IconButton>
          <Menu
           id="menu-appbar"
           anchorEl={anchorElNav}
           anchorOrigin={{
             vertical: 'bottom',
             horizontal: 'left',
           }}
           keepMounted
           transformOrigin={{
             vertical: 'top',
             horizontal: 'left',
           }}
           open={Boolean(anchorElNav)}
           onClose={handleCloseNavMenu}
           sx={{
             display: { xs: 'block', md: 'none' },
           }}
          >
            <MenuItem>
            <Stack sx={{display:'grid',justifyItems:'center'}}>
            <Link to="/">
              <Tab label="Home" id="tab" />
            </Link>
            
            <Link to="emergency-dept-page">
              <Tab label="Emergency" id="tab" />
            </Link>

            <Link to="/">
              <Tab label="Career" id="tab" />
            </Link>

            <Link to="department-page">
              <Tab label="Department" id="tab" />
            </Link>

            <Link to="/">
              <Tab label="Contact" id="tab" />
            </Link>

            {!window.sessionStorage.getItem('tokenValue') &&
            <Box>
            <Link to="signUp">
              <Button id="btn2">Sign Up</Button>
            </Link>
            <Link to="login">
              <Button id="btn1">Login</Button>
            </Link>
            </Box>
           
            }
            {window.sessionStorage.getItem('tokenValue') &&
              <Button id="btn1" onClick={logoutUser}>Logout</Button>
            }
            </Stack>   
            </MenuItem>
          </Menu>
            
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
