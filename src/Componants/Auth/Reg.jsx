import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Stack,
  InputAdornment,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Checkbox from "@mui/material/Checkbox";
import "../../StyleComponants/Auth_style/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sign_Up } from "../../Redux/Slice/AuthSlice";

const Reg = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  let vaildRegxp_fname = RegExp("^([A-Z]{1})([a-z]{2,12})$");
  let vaildRegxp_lname = RegExp("^([A-Z]{1})([a-z]{1,18})$");
  let vaildRegxp_mail = RegExp("^([a-z0-9])+@([a-z]{5,12}).([a-z.]{2,20})$");
  let vaildRegxp_pass = RegExp(
    "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,11}$"
  );

  let [Inputstate, setInputstate] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    errors: { fname: "", lname: "", email: "", password: "" },
  });

  let [Isvalid, setIsvalid] = useState({
    fname: true,
    lname: true,
    email: true,
    password: true,
  });

  let [imgState,setImgstate]=useState() 

  let [user,setUser]=useState(null)

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  let changeHandle = (event) => {
    let { name, value } = event.target;
    // console.log(name,value);
    let errMsg = Inputstate.errors;

    switch (name) {
      case "fname":
        if (value.length <= 0) {
          errMsg.fname = "*Required flield";
          setIsvalid({ ...Isvalid, fname: true });
        } else if (!vaildRegxp_fname.test(value)) {
          errMsg.fname = "First letter uppercase";
          setIsvalid({ ...Isvalid, fname: true });
        } else {
          errMsg.fname = "";
          setIsvalid({ ...Isvalid, fname: false });
        }
        break;

      case "lname":
        if (value.length <= 0) {
          errMsg.lname = "*Required flield";
          setIsvalid({ ...Isvalid, lname: true });
        } else if (!vaildRegxp_lname.test(value)) {
          errMsg.lname = "First letter uppercase";
          setIsvalid({ ...Isvalid, lname: true });
        } else {
          errMsg.lname = "";
          setIsvalid({ ...Isvalid, lname: false });
        }
        break;

      case "email":
        if (value.length <= 0) {
          errMsg.email = "*Required flield";
          setIsvalid({ ...Isvalid, email: true });
        } else if (!vaildRegxp_mail.test(value)) {
          errMsg.email = "Please Enter Valid Email";
          setIsvalid({ ...Isvalid, email: true });
        } else {
          errMsg.email = "";
          setIsvalid({ ...Isvalid, email: false });
        }

        break;

      case "password":
        if (value.length <= 0) {
          errMsg.password = "*Required flield";
          setIsvalid({ ...Isvalid, password: true });
        } else if (!vaildRegxp_pass.test(value)) {
          errMsg.password =
            "*One letter uppercase\n*Including a number\n*Including a symbol\n*At least 6 or 11 characters";
          setIsvalid({ ...Isvalid, password: true });
        } else {
          errMsg.password = "";
          setIsvalid({ ...Isvalid, password: false });
        }
        break;
      default:
        console.log("error");
    }
    setInputstate({ ...Inputstate, [name]: value, errors: errMsg });
  };

  let submitHandle=(event)=>{
   event.preventDefault();
    // console.log("the reg data",Inputstate);
    let registarData = new FormData();

    registarData.append("first_name",Inputstate.fname);
    registarData.append("last_name",Inputstate.lname);
    registarData.append("email",Inputstate.email);
    registarData.append("password",Inputstate.password);
    registarData.append("profile_pic",imgState);
    dispatch(sign_Up(registarData))
      .then(res=>{
        // console.log("Response from API", res);
        if (res.payload.status===200) {
          setUser("Registration Done")
          navigate("/login");
        }
        else if (res.payload.status===201) {
          setUser('Email Already Exists!')
          
      }
      else{
        setUser(null)
         
     }
        
      })
      .catch(err=>{
        console.log("Reg failed",err);
      });
  };

  //for upload profie pic

  const fileInputRef = useRef(null);

  // const handleFileSelect = () => {
  //   fileInputRef.current.click();
    
  // };

  const handleFileUpload = (e) => {
    setImgstate(e.target.files[0]);
    // console.log("Selected File:", setImgstate);
  };


  return (
    <>
      <Box id="bg">
        <Container>
          <Box id="signup-page" sx={{ display: { xs: "none", md: "flex" } }}>
            <Grid container>
              <Grid item md={6}>
                <Box id="signup-img-box"></Box>
              </Grid>
              <Grid item md={6}>
                <Box id="signup">
                  <Grid align="center">
                    <h2>Sign Up</h2>
                    <Box sx={{position:'relative'}}>
                    
                   
                  
                    
                   
                   
            
                    </Box>
                   

                  </Grid>
                  <form onSubmit={submitHandle} id="r-f1">
                  {user && <Stack style={{ color: 'red',paddingBottom:5 }}>{user}</Stack>}
                    <Grid container spacing={2} my={2}>
                      <Grid item md={6}>
                        <TextField
                          fullWidth
                          label="First Name"
                          name="fname"
                          onChange={changeHandle}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                style={{ color: "green" }}
                              >
                                {Isvalid.fname === false && <CheckCircleIcon />}
                              </InputAdornment>
                            ),
                          }}
                        />
                        {Inputstate.errors &&
                        Inputstate.errors.fname.length > 0 ? (
                          <Stack
                            style={{
                              fontSize: "12px",
                              color: "red",
                            }}
                          >
                            {Inputstate.errors.fname}
                          </Stack>
                        ) : null}
                      </Grid>

                      <Grid item md={6}>
                        <TextField
                          fullWidth
                          label="Last Name"
                          name="lname"
                          onChange={changeHandle}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                style={{ color: "green" }}
                              >
                                {Isvalid.lname === false ? (
                                  <CheckCircleIcon />
                                ) : null}
                              </InputAdornment>
                            ),
                          }}
                        />
                        {Inputstate.errors &&
                        Inputstate.errors.lname.length > 0 ? (
                          <Stack
                            style={{
                              fontSize: "12px",
                              color: "red",
                            }}
                          >
                            {Inputstate.errors.lname}
                          </Stack>
                        ) : null}
                      </Grid>
                    </Grid>

                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      style={{ marginBottom: "5%" }}
                      onChange={changeHandle}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{ color: "green" }}
                          >
                            {Isvalid.email === false ? (
                              <CheckCircleIcon />
                            ) : null}
                             
                          </InputAdornment>
                        ),
                      }}
                    />
                    {Inputstate.errors && Inputstate.errors.email.length > 0 ? (
                      <Stack
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "10px",
                        }}
                      >
                        {Inputstate.errors.email}
                      </Stack>
                    ) : null}
                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      type={passwordType}
                      onChange={changeHandle}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{ color: "green" }}
                          >
                            {Isvalid.password === false ? (
                              <CheckCircleIcon />
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Box style={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        onChange={togglePassword}
                        style={{ display: "grid" }}
                      />
                      <span>Show password</span>
                    </Box>
                    {Inputstate.errors &&
                    Inputstate.errors.password.length > 0 ? (
                      <Stack
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "10px",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {Inputstate.errors.password}
                      </Stack>
                    ) : null}
                  <TextField                      
                    ref={fileInputRef}
                      type="file"
                      // style={{ display: "none" }}
                      onChange={handleFileUpload}
                  />
                   
                   
                   {/* <IconButton
                    onClick={handleFileSelect}
                    
                    sx={{position:'absolute',top:2,left:'38%',width:80,height:80}}

                  >
                    
                    <CameraAltRoundedIcon sx={{fontSize:'32px',marginTop:5,marginLeft:'3px'}}/>
                  </IconButton> */}
                    <Button
                      type="submit"
                     
                      variant="contained"
                      color="primary"
                      disabled={
                        Isvalid.fname ||
                        Isvalid.lname ||
                        Isvalid.email ||
                        Isvalid.password
                      }
                    >
                      Sign Up
                    </Button>
                    
                  </form>
                  <h4 id="link-text">
                    Already you have a account!
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "blue" }}
                    >
                      {" "}
                      Login
                    </Link>
                  </h4>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* ----------------------------------------------------------small screen---------------------------------------------------------*/}

          <Box id="s-signup-page" sx={{ display: { xs: "flex", md: "none" } }}>
            <Grid container>
              <Grid item xs={12}>
                <Box id="s-signup">
                  <Grid align="center">
                    <h2>Sign Up</h2>
                  </Grid>
                  <form id="f2">
                    <TextField
                      fullWidth
                      label="First Name"
                      name="fname"
                      onChange={changeHandle}
                      style={{ marginBottom: "5%" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{ color: "green" }}
                          >
                            {Isvalid.fname === false ? (
                              <CheckCircleIcon />
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />
                    {Inputstate.errors && Inputstate.errors.fname.length > 0 ? (
                      <Stack
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "5px",
                        }}
                      >
                        {Inputstate.errors.fname}
                      </Stack>
                    ) : null}
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lname"
                      style={{ marginBottom: "5%" }}
                      onChange={changeHandle}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{ color: "green" }}
                          >
                            {Isvalid.lname === false ? (
                              <CheckCircleIcon />
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />
                    {Inputstate.errors && Inputstate.errors.lname.length > 0 ? (
                      <Stack
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "5px",
                        }}
                      >
                        {Inputstate.errors.lname}
                      </Stack>
                    ) : null}
                    <TextField
                      fullWidth
                      label="Email"
                      onChange={changeHandle}
                      name="email"
                      style={{ marginBottom: "5%" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{ color: "green" }}
                          >
                            {Isvalid.email === false ? (
                              <CheckCircleIcon />
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />
                    {Inputstate.errors && Inputstate.errors.email.length > 0 ? (
                      <Stack
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "5px",
                        }}
                      >
                        {Inputstate.errors.email}
                      </Stack>
                    ) : null}
                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      type={passwordType}
                      onChange={changeHandle}
                      style={{ marginBottom: "5%" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{ color: "green" }}
                          >
                            {Isvalid.password === false ? (
                              <CheckCircleIcon />
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Box style={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        onChange={togglePassword}
                        style={{ display: "grid" }}
                      />
                      <span>Show password</span>
                    </Box>
                    {Inputstate.errors &&
                    Inputstate.errors.password.length > 0 ? (
                      <Stack
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "10px",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {Inputstate.errors.password}
                      </Stack>
                    ) : null}

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={
                        Isvalid.fname ||
                        Isvalid.lname ||
                        Isvalid.email ||
                        Isvalid.password
                      }
                    >
                      Sign Up
                    </Button>
                  </form>
                  <h4 id="link-text">
                    Already you have a account!
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "blue" }}
                    >
                      {" "}
                      Login
                    </Link>
                  </h4>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Reg;
