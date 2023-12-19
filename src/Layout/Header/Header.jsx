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
import { Link } from "react-router-dom";
import "../../StyleComponants/Layout_style/Header.css";

const Header = () => {
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

          </Box>
          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            <Link to="login">
              <Button id="btn1">Login</Button>
            </Link>
            <Link to="signUp">
              <Button id="btn2">Sign Up</Button>
            </Link>
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

            <Link to="login">
              <Button id="btn1">Login</Button>
            </Link>
            <Link to="signUp">
              <Button id="btn2">Sign Up</Button>
            </Link>
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
