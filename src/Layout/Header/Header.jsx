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
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {styled, useTheme } from '@mui/material/styles';


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

  //Drawer part

  const theme = useTheme();

const drawerWidth = 200;

const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

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

            <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 1,
        '& .MuiDrawer-paper': {
          width: drawerWidth, 
        },
        display:{xs:'flex',md:'none'}
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader sx={{display:{xs:'flex',md:'none'}}}> 
      <IconButton onClick={handleDrawerClose} id="ico">
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        </DrawerHeader>
            <Typography textAlign="left" component="div">
              <Stack direction="column" spacing={6}>
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
            </Link>              </Stack>
            </Typography>
      </Drawer>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
