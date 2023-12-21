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
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Avatar from "@mui/material/Avatar";
import MenuList from "@mui/material/MenuList";
import ButtonGroup from "@mui/material/ButtonGroup";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../StyleComponants/Layout_style/Header.css";

const Header = () => {
  
  let pro_img = window.sessionStorage.getItem("pro_image")
  let profile_name = window.sessionStorage.getItem("fname")
  console.log("profile:",pro_img);
  console.log("profile:",profile_name);
  // console.log("token",token_value);
  const navigate = useNavigate();
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
  let logoutUser = () => {
    window.sessionStorage.clear();

    navigate("/");
  };
  //Dropdown part

  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleToggle1 = () => {
    setOpen((prevOpen) => !prevOpen);
   
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  return (
    <AppBar id={color ? "appbar1" : "appbar"}>
      <Container maxWidth="x1">
        <Toolbar>
          <Typography sx={{ flexGrow: 5 }}>
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
            <Link to="ptndetails">
              <AssignmentTurnedInIcon id="icon-tab" />
            </Link>
          </Box>

          {!window.sessionStorage.getItem("tokenValue") && (
            <Box sx={{ flexGrow: 1, display: { md: "flex", xs: "none" }  }}>
              <Link to="signUp">
                <Button id="btn2">Sign Up</Button>
              </Link>
              <Link to="login">
                <Button id="btn1">Login</Button>
              </Link>
            </Box>
          )}

          {window.sessionStorage.getItem("tokenValue") && (
            <Box sx={{ flexGrow: 2, display: { md: "flex", xs: "none" }  }} id='avater'>
              <ButtonGroup variant="contained" sx={{ borderRadius: 50 }}>
                <Avatar
                  alt={profile_name}
                  src={pro_img}
                  onClick={handleToggle}
                  sx={{ cursor: "pointer" }}
                ></Avatar>
              </ButtonGroup>
              <Popper open={open} id="popper" transition sx={{display: { md: "flex", xs: "none" } }}>
                {({ TransitionProps }) => (
                  <Grow {...TransitionProps}>
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList>
                          <Link to='profile'>
                          <Tab label="Profile" onClick={handleClose} id="tab" />
                          </Link>
                          

                          <Tab label="logout" onClick={logoutUser} id="tab"/>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              
            </Box>
          )}

          {/* For xs screen */}
          <Box sx={{ display: { md: "none", xs: "flex" } }}>
            <IconButton
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Stack sx={{ display: "grid", justifyItems: "center" }} id='s1'>
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
                  </Stack>
                  {!window.sessionStorage.getItem("tokenValue") && (
                    <Stack>
                      <Link to="signUp">
                        <Button id="btn2">Sign Up</Button>
                      </Link>
                      <Link to="login">
                        <Button id="btn1">Login</Button>
                      </Link>
                    </Stack>
                  )}
                  {window.sessionStorage.getItem("tokenValue") && (
                    <Stack >
                    <ButtonGroup variant="contained" sx={{ borderRadius: 50 }}>
                      <Avatar
                        
                        
                        onClick={handleToggle1}
                        sx={{ cursor: "pointer" }}
                      ><img src={pro_img} alt=""/></Avatar>
                    </ButtonGroup>
                    <Popper open={open} id="popper1" transition disablePortal>
                      {({ TransitionProps }) => (
                        <Grow {...TransitionProps}>
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList>
                                <Tab label="Profile" onClick={handleClose} id="tab" />
      
                                <Tab label="logout" onClick={logoutUser} id="tab"/>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                    </Stack>
                  )}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
