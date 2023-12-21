import React, { useState } from "react";
import {
  Container,
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Stack,
  InputAdornment,
} from "@mui/material";
import "../../StyleComponants/Auth_style/Login.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sign_In } from "../../Redux/Slice/AuthSlice";


const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  let vaildRegxp_mail = RegExp("^([a-z0-9])+@([a-z]{5,12}).([a-z.]{2,20})$");
  let vaildRegxp_pass = RegExp("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,11}$");

  let [inputstate, setinputstate] = useState({
    email: "",
    password: "",
    errors: { email: "", password: "" },
  });

  let [isCorrect, setIsCorrect] = useState({ email: true, password: true });

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
    let errmsg = inputstate.errors;

    switch (name) {
      case "email":
        if (value.length <= 0) {
          errmsg.email = "*Requierd filed";
          setIsCorrect({ ...isCorrect, email: true });
        } else if (!vaildRegxp_mail.test(value)) {
          errmsg.email = "Please Enter Vaild Email";
          setIsCorrect({ ...isCorrect, email: true });
        } else {
          errmsg.email = "";
          setIsCorrect({ ...isCorrect, email: false });
        }

        break;

      case "password":
        if (value.length <= 0) {
          errmsg.password = "*Requierd filed";
          setIsCorrect({ ...isCorrect, password: true });
        } else if (!vaildRegxp_pass.test(value)) {
          errmsg.password = "Please Enter Vaild Password";
          setIsCorrect({ ...isCorrect, password: true });
        } else {
          errmsg.password = "";
          setIsCorrect({ ...isCorrect, password: false });
        }
        break;

      default:
        console.log("error");
    }
    setinputstate({ ...inputstate, [name]: value, error: errmsg });
    // console.log(name,value);
  };
  const [user, setUser] = useState(null);

  const submitHandle=(e)=>{
    e.preventDefault();
    
    let userdata = new FormData();
    userdata.append("email", inputstate.email);
    userdata.append("password", inputstate.password);

    dispatch(sign_In(userdata))
    .then(res=>{
      console.log("Response of API",res)
      if(res.payload.status===200)
      {
        let base_url = "https://wtsacademy.dedicateddevelopers.us/";
      let folder_path = "uploads/user/profile_pic/";
      let img_url = base_url + folder_path + res.payload.data.profile_pic;
        window.sessionStorage.setItem("tokenValue",res.payload.token)
        window.sessionStorage.setItem("email",res.payload.data.email)
        window.sessionStorage.setItem('pro_image',img_url)
        window.sessionStorage.setItem('fname',res.payload.data.first_name)
        window.sessionStorage.setItem('lname',res.payload.data.last_name)
          navigate("/")
          
      }
      else if (res.payload.status===201) {
        setUser('User Not Found')
      //   setinputstate({
      //     email: '',
      //     password: '',
      // });
      // setIsCorrect({
      //   email: true,
      //   password: true,
      // })
    }
      else{
         setUser(null)
          
      }
  })
  .catch((err)=>{
      console.log("Login failed",err);
  })
 
  };

  return (
    <>
      <Box id="bg">
        <Container>
          <Box id="login-page" sx={{ display: { xs: "none", md: "flex" } }}>
            <Grid container>
              <Grid item md={6}>
                <Box id="login-img-box"></Box>
              </Grid>
              <Grid item md={6}>
                <Box id="login">
                  <Grid align="center">
                    <h2>LogIn</h2>
                  </Grid>
                  <form id="f1" onSubmit={submitHandle}>
                  {user && <Stack style={{ color: 'red',paddingBottom:10 }}>{user}</Stack>}
                    <TextField
                      fullWidth
                      id="input-with-icon-textfield"
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
                            {isCorrect.email === false ? (
                              <CheckCircleIcon />
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />

                    {inputstate.errors && inputstate.errors.email.length > 0 ? (
                      <Stack
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "10px",
                        }}
                      >
                        {inputstate.errors.email}
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
                            {isCorrect.password === false ? (
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
                    {inputstate.errors &&
                    inputstate.errors.password.length > 0 ? (
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "10px",
                        }}
                      >
                        {inputstate.errors.password}
                      </Typography>
                    ) : null}
                    
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={isCorrect.email || isCorrect.password}
                    >
                      Sign In
                    </Button>
                    
                  </form>

                  <h4 id="link-text">
                    Do you want to create a account?
                    <Link
                      to="/signUp"
                      style={{ textDecoration: "none", color: "blue" }}
                    >
                      {" "}
                      Sign Up
                    </Link>
                  </h4>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* ----------------------------------------- small screen ---------------------------------------------------*/}

         <Box id="login-page" sx={{ display: { xs: "flex", md: "none" } }}>
            <Grid container>
              <Grid item xs={12}>
                <Box id="s-login">
                  <Grid align="center">
                    <h2>LogIn</h2>
                  </Grid>
                  <form id="f2" onSubmit={submitHandle}>
                  {user && <Stack style={{ color: 'red',paddingBottom:10 }}>{user}</Stack>}
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
                            {isCorrect.email === false ? (
                              <CheckCircleIcon />
                            ) : null}
                          </InputAdornment>
                        ),
                      }}
                    />
                    {inputstate.errors && inputstate.errors.email.length > 0 ? (
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "10px",
                          fontFamily: "Kanit",
                          fontWeight: 800,
                        }}
                      >
                        {inputstate.errors.email}
                      </Typography>
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
                            {isCorrect.password === false ? (
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
                    {inputstate.errors &&
                    inputstate.errors.password.length > 0 ? (
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "red",
                          paddingBottom: "10px",
                          fontFamily: "Kanit",
                          fontWeight: 800,
                        }}
                      >
                        {inputstate.errors.password}
                      </Typography>
                    ) : null}
                   
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      value={isCorrect.email}
                      disabled={isCorrect.email || isCorrect.password}
                    >
                      Sign In
                    </Button>
                  </form>
                  <h4 id="link-text">
                    Do you want to create a account?
                    <Link
                      to="/signUp"
                      style={{ textDecoration: "none", color: "blue" }}
                    >
                      {" "}
                      Sign Up
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

export default Login;
