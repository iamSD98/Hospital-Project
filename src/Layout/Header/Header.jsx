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
  let token_value = window.sessionStorage.getItem("tokenValue");
  let profile_img=window.localStorage.getItem("profile_image")

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
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  return (
    <AppBar id={color ? "appbar1" : "appbar"}>
      <Container maxWidth="x1">
        <Toolbar>
          <Typography sx={{ flexGrow: 4 }}>
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
            <Box>
              <Link to="signUp">
                <Button id="btn2">Sign Up</Button>
              </Link>
              <Link to="login">
                <Button id="btn1">Login</Button>
              </Link>
            </Box>
          )}
          {window.sessionStorage.getItem("tokenValue") && (
            <Box sx={{flexGrow:1}}>
              <ButtonGroup
                ref={anchorRef}
                aria-label="split button"
                sx={{ borderRadius: 80 }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={profile_img}
                  onClick={handleToggle}
                  sx={{ cursor: "pointer" }}
                ></Avatar>
              </ButtonGroup>
              <Popper
                 sx={{
                  paddingTop:1,
                  
                 }}
                open={open}
                anchorEl={anchorRef.current}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Box 
                    sx={{
                      backgroundColor:'white',
                      boxShadow:'0px 8px 10px skyblue',
                      borderBottomLeftRadius:'10px',
                      borderBottomRightRadius:'10px',
                      }}>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList > 
                          <MenuItem id='menu'>
                            <Stack sx={{backgroundColor:'white'}}>
                              
                              <Link to="profile">
                                <Tab label="View Profile" id="tab" />
                              </Link>

                              {/* <Link to="/">
                                <Tab label="appointment" id="tab" />
                              </Link> */}

                              <Tab
                                label="logout"
                                id="tab"
                                onClick={logoutUser}
                              />
                            </Stack>
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Box>
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
                <Stack sx={{ display: "grid", justifyItems: "center" }}>
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

                  {!window.sessionStorage.getItem("tokenValue") && (
                    <Box>
                      <Link to="signUp">
                        <Button id="btn2">Sign Up</Button>
                      </Link>
                      <Link to="login">
                        <Button id="btn1">Login</Button>
                      </Link>
                    </Box>
                  )}
                  {window.sessionStorage.getItem("tokenValue") && (
                    <Box>
                      <Avatar sx={{ bgcolor: "black" }}></Avatar>
                      <Button id="btn1" onClick={logoutUser}>
                        Logout
                      </Button>
                    </Box>
                  )}
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
